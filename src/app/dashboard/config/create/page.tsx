import { Title } from '@mantine/core';
import { ConfigCreateStepper } from './ConfigCreate.stepper';

export default async function CreateConfig() {
  return (
    <>
      <Title order={1} mb="xl">
        Create new config
      </Title>
      <ConfigCreateStepper />
    </>
  );
}
