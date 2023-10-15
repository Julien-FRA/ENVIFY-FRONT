import { ConfigCard } from '@/components/Card/ConfigCard';
import type { Config } from '@/utils/types/config.type';
import { Grid, GridCol, Title } from '@mantine/core';
import { apiServer } from '@/utils/api/apiFactory';
export default async function ConfigsList() {
  const suggestedConfigs: Config[] = await apiServer.get('/configs/suggested');

  return (
    <>
      <Title order={1} mb="xl">
        Suggested and verified configurations
      </Title>
      {suggestedConfigs?.length > 0 ? (
        <Grid>
          {suggestedConfigs?.map((config) => (
            <GridCol span={4} key={config.id}>
              {/* @ts-expect-error Async Server Components */}
              <ConfigCard config={config} type="suggested" />
            </GridCol>
          ))}
        </Grid>
      ) : (
        <p>There are no suggested configurations yet.</p>
      )}
    </>
  );
}
