"use client";
import ArrowButton from "@/components/Button/Arrow.button";
import PrimaryPutton from "@/components/Button/Primary.button";
import HeaderHorizontal from "@/components/Nav/Header.horizontal";
import { Text } from "@mantine/core";
import styled from "@emotion/styled";

const MainCustom = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 2rem;
`;

export default function Landing() {
  return (
    <>
      <HeaderHorizontal />
      <MainCustom>
        <Text size="xl" mx="auto" my="1rem" ta="center">
          Simplify your virtual machineconfiguration effortlessly
        </Text>
        <Text size="sm" mx="auto" my="1rem" ta="center">
          Focus on what matters the most, save time and configure your virtual
          machine in few clicks. You choose, we provide all you need
        </Text>
        <PrimaryPutton href={"/register"}>Get started</PrimaryPutton>
        <ArrowButton href={"/community"}>
          See community configuration
        </ArrowButton>
      </MainCustom>
    </>
  );
}
