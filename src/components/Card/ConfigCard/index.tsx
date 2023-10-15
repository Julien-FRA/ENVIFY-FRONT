import classes from './ConfigCard.module.css';
import { getFormatDateRelative, getArrayFirsts } from '@/utils/helpers';
import { Avatar, AvatarGroup, Box, Flex, Text } from '@mantine/core';
import type { Config, Package } from '@/utils/types/config.type';
import Link from 'next/link';
import { DeleteConfigButton } from '@/components/Button/DeleteConfig.Button';

const fetchPackageIcon = async (
  packageName: string
): Promise<string | null> => {
  const res = await fetch(
    `https://api.iconscout.com/v3/search?query=${packageName}&product_type=item&asset=icon&price=free&per_page=1&page=1&formats%5B%5D=svg&sort=relevant`,
    {
      headers: {
        'Client-ID': process.env.ICON_SCOUT_CLIENT_ID,
      },
    }
  );
  const data = await res.json();
  const icon = data?.response?.items?.data?.[0].urls?.png_64;
  return icon;
};

const fetchPackageIcons = async (
  packages: Package[]
): Promise<Record<string, string | null>> => {
  const packageNames = packages.map((pkg) => pkg.name);
  const icons = await Promise.all(packageNames.map(fetchPackageIcon));
  return packageNames.reduce(
    (acc, name, index) => {
      acc[name] = icons[index];
      return acc;
    },
    {} as Record<string, string | null>
  );
};

export const ConfigCard = async ({
  config,
  type = 'user',
}: {
  config: Config;
  type?: string;
}) => {
  const slicedPackages = getArrayFirsts<Package>(3)(config?.packages);
  const formattedCreatedAt = getFormatDateRelative(config?.created_at ?? '');
  const packageIcons = await fetchPackageIcons(config.packages);

  return (
    <Box className={classes.container}>
      <Flex justify="flex-end" className={classes.delete}>
        <DeleteConfigButton id={config.id} />
      </Flex>

      <Link
        href={`/dashboard/${
          type === 'suggested' ? 'suggested-config' : 'config'
        }/${config?.id}`}
      >
        <Box className={`${classes.configCard} h-100`} p="md">
          <Flex justify="space-between">
            <Text component="p">{config.name}</Text>
          </Flex>
          <Box>
            <AvatarGroup my="lg">
              {slicedPackages
                ?.slice(0, 3)
                .map((pkg: Package) => (
                  <Avatar
                    key={pkg.name}
                    src={packageIcons[pkg.name] ?? null}
                    alt={pkg.name}
                    size={48}
                    className={classes.avatar}
                  />
                ))}
              {config?.packages?.length > 3 && (
                <Avatar
                  size={48}
                  className={`${classes.avatar_others} ${classes.avatar}`}
                >
                  +{config?.packages?.length - 3}
                </Avatar>
              )}
            </AvatarGroup>
          </Box>
          <Flex justify="space-between">
            <Box>
              <Text size="xs" component="p">
                OS {`- ${config.operatingSystemName}`}
              </Text>
              {slicedPackages?.length > 0 && (
                <Box mt="xs">
                  {slicedPackages?.map((pkg: Package) => (
                    <Text size="xs" key={pkg.packageVersionId} component="p">
                      {pkg.name} {pkg.versionNumber && `- ${pkg.versionNumber}`}
                    </Text>
                  ))}
                </Box>
              )}
            </Box>
            <Box component="p" m={0}>
              <Text size="xs" component="span" c="dark.3">
                Created
              </Text>
              <Text size="xs" component="span">
                {` ${formattedCreatedAt}`}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};
