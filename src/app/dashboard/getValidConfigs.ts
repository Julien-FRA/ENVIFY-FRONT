import { apiServer } from '@/utils/api/apiFactory';
import { ConfigSchema } from '@/utils/schemas/config.schema';
import { Config, Configs, ErrorDetails } from '@/utils/types/config.type';
import { getArrayFirsts } from '@/utils/helpers';

export const getValidConfigs = async (configCount?: number) => {
  const errorDetails: ErrorDetails = {
    hasSomeUnusableConfigs: false,
    message: 'Some of your configs has been hidden',
    messageDetails:
      'Some of your configs has been hidden due to their unusability.\nPlease recreate them or contact support.',
    hiddenConfigs: [],
  };
  const validConfigs: Configs = [];

  const res: unknown = await apiServer.get('/configs/me');
  if (res instanceof Array && res.length > 0) {
    res.forEach((config: Config) => {
      const parsedConfig = ConfigSchema.safeParse(config);
      if (parsedConfig.success) {
        validConfigs.push(parsedConfig.data);
      } else {
        errorDetails.hasSomeUnusableConfigs = true;
        errorDetails.hiddenConfigs.push({
          config,
          error: parsedConfig.error.toString(),
        });
      }
    });
  }
  if (!configCount) return { configs: validConfigs, errors: errorDetails };

  const slicedValidConfigs = getArrayFirsts<Config>(configCount)(validConfigs);

  return { configs: slicedValidConfigs, errors: errorDetails };
};
