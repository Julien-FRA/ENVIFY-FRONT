import { useCallback, useState } from 'react';

type MutationOptions<TMutationInput, TMutationOutput, Context = unknown> = {
  mutationQuery: (variables: TMutationInput) => Promise<TMutationOutput>;
  onMutate?: (variables: TMutationInput) => Context;
  onError?: (error: Error) => void;
  onSuccess?: (
    data: TMutationOutput,
    variables: TMutationInput,
    context: Context
  ) => void;
};

type Mutation<TMutationInput, TMutationOutput> = {
  mutate: (variables: TMutationInput) => Promise<void>;
  data: TMutationOutput | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
};

export const useMutation = <
  TMutationInput,
  TMutationOutput,
  Context = unknown,
>({
  mutationQuery,
  onMutate = () => ({}) as Context,
  onError = () => {},
  onSuccess = () => {},
}: MutationOptions<TMutationInput, TMutationOutput, Context>): Mutation<
  TMutationInput,
  TMutationOutput
> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [data, setData] = useState<TMutationOutput | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const mutate = useCallback(
    async (variables: TMutationInput) => {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      setData(null);
      setError(null);

      try {
        const context: Context = onMutate(variables);
        const result = await mutationQuery(variables);
        setData(result);
        setIsSuccess(true);
        onSuccess(result, variables, context);
      } catch (error) {
        const errorObj = error as Error;
        setError(errorObj);
        setIsError(true);
        onError(errorObj);
      } finally {
        setIsLoading(false);
      }
    },
    [mutationQuery, onMutate, onError, onSuccess]
  );

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
    data,
    error,
  };
};
