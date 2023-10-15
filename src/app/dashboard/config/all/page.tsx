import { ConfigCard } from '@/components/Card/ConfigCard';
import { Flex, Grid, GridCol, Title } from '@mantine/core';
import { getValidConfigs } from '../../getValidConfigs';
import { WarningConfig } from '../Warning.config';
export default async function ConfigsList() {
  const { configs, errors } = await getValidConfigs();

  return (
    <>
      <Title order={1} mb="xl">
        Configurations
      </Title>
      <Flex justify="flex-end">
        <WarningConfig errors={errors} />
      </Flex>
      {configs?.length > 0 ? (
        <Grid>
          {configs?.map((config) => (
            <GridCol span={4} key={config.id}>
              {/* @ts-expect-error Async Server Components */}
              <ConfigCard config={config} />
            </GridCol>
          ))}
        </Grid>
      ) : (
        <p>You have no configurations yet.</p>
      )}
    </>
  );
}
