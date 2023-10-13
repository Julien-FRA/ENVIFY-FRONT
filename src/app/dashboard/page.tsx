import { Button } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import { Box, Grid, GridCol } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { apiClient } from '@/utils/api/apiFactory';
import { getArrayFirsts } from '@/utils/helpers';
import type { Config } from '@/utils/types/config.type';

export default async function Dashboard() {
  const userConfigs: Config[] = await apiClient.get('/configs');
  const slicedConfigs = getArrayFirsts<Config>(3)(userConfigs);

  return (
    <>
      <Button href="/dashboard/config/create">Create new config</Button>
      <Box mt={36}>
        {userConfigs?.length > 0 ? (
          <>
            <Button
              p={0}
              variant="arrow"
              href="/dashboard/config/all"
              rightSection={<BsArrowRight />}
            >
              My configurations
            </Button>

            <Grid>
              {slicedConfigs?.map((config, i) => (
                <GridCol span={4} key={i}>
                  <ConfigCard config={config} />
                </GridCol>
              ))}
            </Grid>
          </>
        ) : (
          <p>You have no configurations yet.</p>
        )}
      </Box>
    </>
  );
}
