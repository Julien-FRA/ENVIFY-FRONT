'use client';

import { deleteConfig } from '@/utils/api/config.api';
import { Button } from '@mantine/core';
import { useMutation } from 'react-query';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';

export const DeleteConfigButton = ({ id }: { id: number }) => {
  const mutation = useMutation('deleteConfig', () => deleteConfig(id));
  useEffect(() => {
    if (mutation.isSuccess) window.location.reload();
  }, [mutation.isSuccess]);
  return (
    <>
      <Button
        w={50}
        h={30}
        p={5}
        variant="subtle"
        onClick={() => mutation.mutateAsync()}
      >
        {mutation.isLoading ? 'Deleting...' : <AiFillCloseCircle />}
      </Button>
    </>
  );
};
