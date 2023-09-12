import { GiHexagonalNut } from 'react-icons/gi';
import { ButtonIcon } from '../../Button';
import { Features } from '../Features.container';
import { Box, Grid, GridCol } from '@mantine/core';
import classes from './Auth.module.css';
type AuthContainerProps = {
  children: JSX.Element;
};

export const AuthContainer = (props: AuthContainerProps) => {
  return (
    <Box>
      <Grid
        columns={10}
        m={0}
        align="center"
        classNames={{ inner: classes.inner }}
      >
        <GridCol className={classes.container} span={4} px={100} py={30}>
          <ButtonIcon href="/" mb="lg">
            <GiHexagonalNut />
          </ButtonIcon>
          {props.children}
        </GridCol>
        <GridCol span={6}>
          <Features />
        </GridCol>
      </Grid>
    </Box>
  );
};
