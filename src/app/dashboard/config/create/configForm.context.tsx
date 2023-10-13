'use client';
import { ConfigInput } from '@/utils/types/config.type';
import { createFormContext } from '@mantine/form';

export const [ConfigFormProvider, useConfigFormContext, useConfigForm] =
  createFormContext<ConfigInput>();
