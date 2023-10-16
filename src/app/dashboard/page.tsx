import { Button } from '@/components/Button';
import { ConfigCard } from '@/components/Card/ConfigCard';
import { Box, Flex, Grid, GridCol } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { getValidConfigs } from './getValidConfigs';

export default async function Dashboard() {
  const { configs } = await getValidConfigs(3);

  return (
    <>
      <Button href="/dashboard/config/create">Create new config</Button>
      <Box mt={36}>
        {configs?.length > 0 ? (
          <>
            <Flex align="center" justify="space-between">
              <Button
                p={0}
                variant="arrow"
                href="/dashboard/config/all"
                rightSection={<BsArrowRight />}
              >
                Your configurations
              </Button>
            </Flex>

            <Grid mt={24}>
              {configs.map((config) => (
                <GridCol key={config.id} span={4}>
                  {/* @ts-expect-error Async Server Components */}
                  <ConfigCard config={config} />
                </GridCol>
              ))}
            </Grid>
          </>
        ) : (
          <p>You have no configs yet.</p>
        )}
      </Box>
    </>
  );
}
