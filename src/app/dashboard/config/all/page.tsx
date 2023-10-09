import { ConfigCard } from '@/components/Card/ConfigCard';
import type { Config } from '@/utils/types/config.type';
import { Grid, GridCol, Title } from '@mantine/core';
import { apiClient } from '@/utils/api/apiFactory';
export default async function ConfigsList() {
  const configs: Config[] = await apiClient.get('/configs');

  return (
    <>
      <Title order={1} mb="xl">
        Configurations
      </Title>
      {configs?.length > 0 ? (
        <Grid>
          {configs?.map((config) => (
            <GridCol span={4} key={config.id}>
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
