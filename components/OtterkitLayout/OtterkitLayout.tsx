import { AppShell, Navbar, Header, Center } from '@mantine/core';
import { PropsWithChildren } from 'react';
import useStyles from './OtterkitLayout.styles';

export function OtterkitLayout(props: PropsWithChildren) {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="md"
      navbar={<Navbar width={{ base: 300 }} height={'100%'} p="xs">{/* Navbar content */}</Navbar>}
      header={<Header height={60} p="xs">{/* Header content */}</Header>}
      className={classes.main}
    >
      <Center>
        {props.children}
      </Center>
    </AppShell>
  );
}