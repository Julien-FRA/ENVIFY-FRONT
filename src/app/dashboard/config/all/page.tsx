import { ConfigCard } from '@/components/Card/ConfigCard';
import { Grid, GridCol, Title } from '@mantine/core';
import { getValidConfigs } from '../../getValidConfigs';
export default async function ConfigsList() {
  const { configs } = await getValidConfigs();

  return (
    <>
      <Title order={1} mb="xl">
        Configurations
      </Title>

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
