import { useConfigFormContext } from '@/app/dashboard/config/create/configForm.context';
import {
  PackagePropertiesInput,
  PropertiesInput,
  PropertiesMultipleInput,
  PropertiesSingleInput,
} from '@/utils/types/package.type';
import {
  Box,
  Flex,
  Select,
  Switch,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Button } from '../Button';
import { useListState } from '@mantine/hooks';
import { useEffect } from 'react';

type BlockPropertiesProps = {
  packageProperty: PackagePropertiesInput;
  packagePropertyIndex: number;
};

export const BlockProperties = ({
  packageProperty,
  packagePropertyIndex,
}: BlockPropertiesProps) => {
  return (
    <Box mb="xl">
      <Title order={2} mb="sm">
        {packageProperty.packageName}
      </Title>
      {packageProperty.properties.map((pck, index) => (
        <Box mb="xs" key={`${pck.label}-${packagePropertyIndex}`}>
          <PropertiesDisplay
            {...pck}
            packagePropertyIndex={packagePropertyIndex}
            propertyIndex={index}
          />
        </Box>
      ))}
    </Box>
  );
};

type ArrayIndexes = {
  packagePropertyIndex: number;
  propertyIndex: number;
};

const PropertiesDisplay = (props: PropertiesInput & ArrayIndexes) => {
  switch (props.type) {
    case 'multiple':
      return <MultipleInputs {...props} />;
    default:
      return (
        <SingleInput
          {...props}
          fieldPath={`packagesProperties.${props.packagePropertyIndex}.properties.${props.propertyIndex}.value`}
        />
      );
  }
};

const MultipleInputs = (props: PropertiesMultipleInput & ArrayIndexes) => {
  const form = useConfigFormContext();

  const [propertiesValues, handlersPropertiesValues] = useListState([
    props.properties,
  ]);

  useEffect(() => {
    form.setFieldValue(
      `packagesProperties.${props.packagePropertyIndex}.properties.${props.propertyIndex}.value`,
      propertiesValues
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.packagePropertyIndex, props.propertyIndex, propertiesValues]);

  const addSubProperties = () =>
    handlersPropertiesValues.append(props.properties);

  const deleteSubProperties = (index: number) =>
    handlersPropertiesValues.remove(index);

  const setSubProperties = (
    propertyIndex: number,
    subPropertyIndex: number,
    value: string
  ) => {
    handlersPropertiesValues.setState((prevPropertiesValues) => {
      const newPropertiesValues = JSON.parse(
        JSON.stringify(prevPropertiesValues)
      );

      newPropertiesValues[propertyIndex][subPropertyIndex].value = value;

      return newPropertiesValues;
    });
  };

  return (
    <Box mx="lg" my="lg">
      <Flex align="center" gap={10} mb="sm">
        <Title order={3}>{props.label}:</Title>
        <Button mb="0" onClick={addSubProperties}>
          Add {props.label}
        </Button>
      </Flex>
      {propertiesValues.map((value, index) => (
        <Box key={`${props.label}-${props.propertyIndex}-${index}`} mb={10}>
          <Text mb="xs">
            {props.label} {index + 1}
          </Text>
          {value.map((property, propertyIndex) => (
            <Box mb="xs" key={`${property.label}-${index}`}>
              <PropertiesInputs
                {...property}
                packagePropertyIndex={index}
                propertyIndex={propertyIndex}
                handlers={setSubProperties}
              />
            </Box>
          ))}
          <Button mt="sm" onClick={() => deleteSubProperties(index)}>
            Supprimer {props.label}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

const SingleInput = (props: PropertiesSingleInput & { fieldPath: string }) => {
  const form = useConfigFormContext();

  switch (props.type) {
    case 'boolean':
      return (
        <Switch
          label={props.label}
          required={true}
          defaultChecked={props.value}
          {...form.getInputProps(props.fieldPath)}
        />
      );
    case 'select':
      return (
        <Select
          label={props.label}
          placeholder={props.label}
          data={props.items}
          required={true}
          {...form.getInputProps(props.fieldPath)}
          value={props.value}
        />
      );
    default:
      return (
        <TextInput
          placeholder={props.label}
          label={props.label}
          required={true}
          {...form.getInputProps(props.fieldPath)}
          defaultValue={props.value}
          value={props.value}
          type="text"
        />
      );
  }
};

const PropertiesInputs = (
  props: PropertiesSingleInput &
    ArrayIndexes & {
      handlers: (
        propertyIndex: number,
        subPropertyIndex: number,
        value: string
      ) => void;
    }
) => {
  switch (props.type) {
    case 'boolean':
      return (
        <Switch
          label={props.label}
          required={true}
          defaultChecked={props.value}
        />
      );
    case 'select':
      return (
        <Select
          label={props.label}
          placeholder={props.label}
          data={props.items}
          required={true}
          value={props.value}
        />
      );
    default:
      return (
        <TextInput
          placeholder={props.label}
          label={props.label}
          required={true}
          onChange={(event) =>
            props.handlers(
              props.packagePropertyIndex,
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
