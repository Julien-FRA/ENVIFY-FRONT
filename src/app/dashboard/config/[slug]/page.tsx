// import { BlockScript } from '@/components/BlockScript';
import { Title } from '@mantine/core';
import { getValidConfigs } from '../../getValidConfigs';
import { apiServer } from '@/utils/api/apiFactory';
import { z } from 'zod';
import { SimpleBlockScript } from '@/components/BlockScript/SimpleBlockSccript';

const scriptsSchema = z
  .array(
    z.object({
      scriptLabel: z.string(),
      script: z.string(),
    })
  )
  .min(1);

export default async function ReadConfig({
  params,
}: {
  params: { slug: string };
}) {
  const userConfigs = await getValidConfigs();
  const config = userConfigs.configs.find(
    (config) => config.id.toString() === params.slug
  );

  const body = config?.packages.map((pkg) => {
    return {
      config: pkg.name,
      os: config.operatingSystemName,
      release: pkg.versionNumber,
    };
  });

  const scripts = await apiServer.post(`/scriptGenerator/script/lines`, body);

  const scriptsValidated = scriptsSchema.safeParse(scripts);

  return (
    <>
      <Title order={1} mb="xl">
        Config - {config?.name}
      </Title>
      {scriptsValidated.success ? (
        <SimpleBlockScript scripts={scriptsValidated.data} />
      ) : (
        <p>No scripts found</p>
      )}
    </>
  );
}
