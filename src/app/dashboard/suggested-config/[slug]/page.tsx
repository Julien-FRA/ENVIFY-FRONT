import type { Configs, Script } from '@/utils/types/config.type';
import { Title } from '@mantine/core';
import { apiServer } from '@/utils/api/apiFactory';
import { SimpleBlockScript } from '@/components/BlockScript/SimpleBlockSccript';

export default async function ReadConfig({
  params,
}: {
  params: { slug: string };
}) {
  const configs: Configs = await apiServer.get(`/configs/`);
  const config = configs?.find((c) => c.id.toString() === params.slug);

  const body = config?.packages?.map((pkg) => {
    return {
      config: pkg.name,
      os: config.operatingSystemName,
      release: pkg.versionNumber,
    };
  });

  const scripts: Script[] = await apiServer.post(
    `/scriptGenerator/script/lines`,
    body
  );

  return (
    <>
      <Title order={1} mb="xl">
        Config
      </Title>
      {scripts?.length ? (
        <SimpleBlockScript scripts={scripts} />
      ) : (
        <p>No scripts found</p>
      )}
    </>
  );
}
