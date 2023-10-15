import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';
import {
  PropertiesInput,
  PropertiesMultipleInput,
  PropertiesSingleInput,
} from '@/utils/types/package.type';
import {
  Box,
  Collapse,
  Flex,
  Select,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import { Button } from '../Button';
import { useDisclosure, useListState } from '@mantine/hooks';
import { useEffect } from 'react';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';

type BlockPropertiesProps = {
  description: string | null | undefined;
  packageIndex: number;
  packagePropeties: PropertiesInput[];
};

export const BlockProperties = ({
  description,
  packagePropeties,
  packageIndex,
}: BlockPropertiesProps) => {
  return (
    <Box my="xs">
      {description && (
        <Text size="lg" c="gray.6">
          # {description}
        </Text>
      )}
      {packagePropeties.map((property, index) => (
        <Box mx="lg" my="xs" key={`${property.label}-${index}`}>
          <PropertiesDisplay
            packageIndex={packageIndex}
            propertyIndex={index}
            {...property}
          />
        </Box>
      ))}
    </Box>
  );
};

type ArrayIndexes = {
  packageIndex: number;
  propertyIndex: number;
};

const PropertiesDisplay = (props: PropertiesInput & ArrayIndexes) => {
  switch (props.type) {
    case 'multiple':
      return <MultipleInputs {...props} />;
    default:
      return <SingleInput {...props} />;
  }
};

const SingleInput = (props: PropertiesSingleInput & ArrayIndexes) => {
  const form = useConfigFormContext();

  const formFieldPath = `packages.${props.packageIndex}.packageProperties.${props.propertyIndex}.value`;

  switch (props.type) {
    case 'boolean':
      return (
        <Switch
          label={`${props.label} :`}
          required={true}
          defaultChecked={props.value}
          {...form.getInputProps(formFieldPath)}
        />
      );
    case 'select':
      return (
        <Select
          label={`${props.label} :`}
          placeholder={props.label}
          data={props.items}
          required={true}
          variant="code"
          {...form.getInputProps(formFieldPath)}
          value={props.value}
        />
      );
    default:
      return (
        <TextInput
          placeholder={props.label}
          label={`${props.label} :`}
          required={true}
          variant="unstyled"
          {...form.getInputProps(formFieldPath)}
          value={props.value}
        />
      );
  }
};

type SetPropertiesValue = (
  propertiesIndex: number,
  propertyIndex: number,
  value: string
) => void;

const MultipleInputs = (props: PropertiesMultipleInput & ArrayIndexes) => {
  const form = useConfigFormContext();

  const [propertiesValues, handlersPropertiesValues] = useListState([
    props.properties,
  ]);

  useEffect(() => {
    form.setFieldValue(
      `packages.${props.packageIndex}.packageProperties.${props.propertyIndex}.values`,
      propertiesValues
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.packageIndex, props.propertyIndex, propertiesValues]);

  const addSubProperties = () =>
    handlersPropertiesValues.append(props.properties);

  const deleteSubProperties = (index: number) =>
    handlersPropertiesValues.remove(index);

  const setPropertiesValue: SetPropertiesValue = (
    propertyIndex,
    subPropertyIndex,
    value
  ) => {
    handlersPropertiesValues.setState((prevPropertiesValues) => {
      const newPropertiesValues = JSON.parse(
        JSON.stringify(prevPropertiesValues)
      );

      newPropertiesValues[propertyIndex][subPropertyIndex].values = value;

      return newPropertiesValues;
    });
  };

  return (
    <Box my="md">
      <Flex align="center" gap={10} mb="sm">
        <Text size="sm" c="dark.1" w="85%">
          {props.label}:
        </Text>
        <Button h={40} mb="0" onClick={addSubProperties}>
          Add {props.label}
        </Button>
      </Flex>
      {propertiesValues.map((properties, propertiesIndex) => (
        <Flex key={`${props.label}-${propertiesIndex}`} mb={10} gap={20}>
          <CollapseProperty
            setPropertiesValue={setPropertiesValue}
            propertiesIndex={propertiesIndex}
            label={props.label}
            properties={properties}
          />

          <Button h={40} onClick={() => deleteSubProperties(propertiesIndex)}>
            Supprimer {props.label}
          </Button>
        </Flex>
      ))}
    </Box>
  );
};

const CollapseProperty = (props: {
  properties: PropertiesSingleInput[];
  setPropertiesValue: SetPropertiesValue;
  label: string;
  propertiesIndex: number;
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box w="80%">
      <Box
        onClick={toggle}
        mb="sm"
        h={40}
        style={{
          border: '1px solid var(--mantine-color-dark-3)',
          borderRadius: '0.2rem',
        }}
      >
        <Flex align="center" justify="space-between" h="100%" px="sm">
          <Text size="sm" c="dark.3">
            {props.label} {props.propertiesIndex + 1}
          </Text>
          {opened ? <BsArrowUpShort /> : <BsArrowDownShort />}
        </Flex>
      </Box>

      <Collapse in={opened}>
        {props.properties.map((property, propertyIndex) => (
          <Box ml="lg" mb="xs" key={`${property.label}-${propertyIndex}`}>
            <PropertiesInputs
              {...property}
              propertiesIndex={props.propertiesIndex}
              propertyIndex={propertyIndex}
              setPropertiesValue={props.setPropertiesValue}
            />
          </Box>
        ))}
      </Collapse>
    </Box>
  );
};

const PropertiesInputs = (
  props: PropertiesSingleInput & {
    propertiesIndex: number;
    propertyIndex: number;
  } & { setPropertiesValue: SetPropertiesValue }
) => {
  switch (props.type) {
    case 'boolean':
      return (
        <Switch
          label={`${props.label} :`}
          required={true}
          defaultChecked={props.value}
          onChange={(event) =>
            props.setPropertiesValue(
              props.propertiesIndex,
              props.propertyIndex,
              String(event)
            )
          }
        />
      );
    case 'select':
      return (
        <Select
          label={`${props.label} :`}
          placeholder={props.label}
          data={props.items}
          required={true}
          variant="code"
          onChange={(event) =>
            props.setPropertiesValue(
              props.propertiesIndex,
              props.propertyIndex,
              event!
            )
          }
          value={props.value}
        />
      );
    default:
      return (
        <TextInput
          placeholder={props.label}
          label={`${props.label} :`}
          required={true}
          size="xs"
          variant="unstyled"
          onChange={(event) =>
            props.setPropertiesValue(
              props.propertiesIndex,
              props.propertyIndex,
              event.currentTarget.value
            )
          }
          value={props.value}
          type="text"
        />
      );
  }
};
