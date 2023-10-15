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
  maxStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
  prevStep: () => void;
};

const StepperContext = createContext<StepperContextData | undefined>(undefined);

export const StepperProvider = ({ children }: { children: JSX.Element[] }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxStep = children[0].props.children.length - 1;

  const nextStep = useCallback(
    () =>
      setActiveStep((prevStep) =>
        prevStep < maxStep ? prevStep + 1 : prevStep
      ),
    [maxStep]
  );

  const prevStep = useCallback(
    () => setActiveStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep)),
    []
  );

  const contextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      nextStep,
      prevStep,
      maxStep,
    }),
    [activeStep, setActiveStep, nextStep, prevStep, maxStep]
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

type FromProps<TValues> = {
  FormProvider: FC<
    FormProviderProps<UseFormReturnType<TValues, (values: TValues) => TValues>>
  >;
  useForm: UseForm<TValues, (values: TValues) => TValues>;
  formInput: UseFormInput<TValues>;
  mutation: (data: TValues) => void;
  children: React.ReactNode;
};

export const FormProvider = <TValues,>(props: FromProps<TValues>) => {
  const form = props.useForm(props.formInput);

  const mutate = (values: TValues) => props.mutation(values);

  return (
    <props.FormProvider form={form}>
      <form onSubmit={form.onSubmit(mutate)}>{props.children}</form>
    </props.FormProvider>
  );
};
