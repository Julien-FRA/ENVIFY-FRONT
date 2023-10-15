import { Features } from '../Features.container';
import { Box, Grid, GridCol } from '@mantine/core';
import classes from './Auth.module.css';
import { EnvifyLogoButton } from '@/components/Button/Logo.button';
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
          <EnvifyLogoButton back />
          {props.children}
        </GridCol>
        <GridCol span={6}>
          <Features />
        </GridCol>
      </Grid>
    </Box>
  );
};
