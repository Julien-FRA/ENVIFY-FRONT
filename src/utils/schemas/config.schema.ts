import { z } from 'zod';

export const PackageSchema = z.object({
  name: z.string(),
  versionNumber: z.string(),
  packageVersionId: z.number(),
  logo: z.string().optional(),
});

export const ConfigSchema = z.object({
  id: z.number(),
  userId: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  operatingSystemId: z.number(),
  operatingSystemName: z.string(),
  packages: z.array(PackageSchema).min(1),
  created_at: z.string().optional(),
});

export const ConfigArraySchema = z.array(ConfigSchema);
