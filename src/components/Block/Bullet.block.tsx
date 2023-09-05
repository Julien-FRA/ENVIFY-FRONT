'use client';
import React from 'react';
import { Container, Flex, Text, Title } from '@mantine/core';
import { BsCheckCircleFill } from 'react-icons/bs';

export const BulletBlock = () => {
  return (
    <Container size="md" p={'2rem'} my={'2rem'}>
      <Title order={2} size={'3rem'} mb={'2rem'}>
        The simplest way to configure your Virtual Machine
      </Title>
      <Flex justify="flex-start" align="center" direction="row" mb={'0.5rem'}>
        <BsCheckCircleFill />
        <Text size={'1.25rem'} ml={'1.25rem'}>
          No more need to search for hours all the needed command lines
        </Text>
      </Flex>
      <Flex justify="flex-start" align="center" direction="row" mb={'0.5rem'}>
        <BsCheckCircleFill />
        <Text size={'1.25rem'} ml={'1.25rem'}>
          Choose your packages in a wide list or pick one of the 2000+ community
          configuration
        </Text>
      </Flex>
      <Flex justify="flex-start" align="center" direction="row" mb={'0.5rem'}>
        <BsCheckCircleFill />
        <Text size={'1.25rem'} ml={'1.25rem'}>
          Save in your profile your config to edit and/or reuse it quick soon if
          needed
        </Text>
      </Flex>
      <Flex justify="flex-start" align="center" direction="row" mb={'0.5rem'}>
        <BsCheckCircleFill />
        <Text size={'1.25rem'} ml={'1.25rem'}>
          Copy and paste in VM the given command lines and jod is done !
        </Text>
      </Flex>
    </Container>
  );
};
