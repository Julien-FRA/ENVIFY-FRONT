'use client';
import React, {
  FC,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';
import {
  UseForm,
  UseFormInput,
  UseFormReturnType,
} from '@mantine/form/lib/types';
import { FormProviderProps } from '@mantine/form/lib/FormProvider/FormProvider';

type StepperContextData = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
};

const StepperContext = createContext<StepperContextData | undefined>(undefined);

export const StepperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = useCallback(
    () => setActiveStep((prevStep) => prevStep + 1),
    []
  );

  const prevStep = useCallback(
    () => setActiveStep((prevStep) => prevStep - 1),
    []
  );

  const contextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      nextStep,
      prevStep,
    }),
    [activeStep, setActiveStep, nextStep, prevStep]
  );

  return (
    <StepperContext.Provider value={contextValue}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context)
    throw new Error('useStepper must be used within a StepperProvider');

  return context;
};

type StepperFromProps<TValues> = {
  FormProvider: FC<
    FormProviderProps<UseFormReturnType<TValues, (values: TValues) => TValues>>
  >;
  useForm: UseForm<TValues, (values: TValues) => TValues>;
  formInput: UseFormInput<TValues>;
  children: React.ReactNode;
};

export const StepperFormProvider = <TValues,>(
  props: StepperFromProps<TValues>
) => {
  const form = props.useForm(props.formInput);

  return (
    <props.FormProvider form={form}>
      <form onSubmit={form.onSubmit(() => {})}>{props.children}</form>
    </props.FormProvider>
  );
};
