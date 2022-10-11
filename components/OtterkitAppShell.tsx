import {
  AppShell,
  Navbar,
  Header,
  Code,
  ScrollArea,
  MediaQuery,
  Burger,
  Container,
  useMantineTheme,
  TypographyStylesProvider,
  createStyles,
  Group,
} from '@mantine/core';
import { PropsWithChildren, useState, useId } from 'react';
import { OtterkitThemeToggle } from './OtterkitThemeToggle';
import { OtterkitLogo } from './OtterkitLogo';
import { OtterkitSearch } from './OtterkitSearch';
import { GitHubButton } from './GitHubButton';
import { GroupedLinks } from './GroupedLinks';
import { appMetadata } from '../metadata/appMetadata';

const useStyles = createStyles((theme) => ({
  otterkitStyling: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
  },

  otterkitCOBOL: {
    fontWeight: 600,
    color: theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6],
  },

  versionStyle: {
    fontWeight: 700,
    borderRadius: theme.radius.xl,
    marginInline: theme.spacing.xs,
    paddingInline: theme.spacing.xs,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
  },

  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
}));

export function OtterkitAppShell(props: PropsWithChildren) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const sidebarLinks = appMetadata.map((item) => (
    <GroupedLinks closeNav={setOpened} {...item} key={useId()} />
  ));

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      className={classes.otterkitStyling}
      header={
        <Header className={classes.otterkitStyling} height={64} p="md">
          <div className={classes.flexContainer}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((open) => !open)}
                size="sm"
                color="#6495ED"
                mr="sm"
              />
            </MediaQuery>

            <OtterkitLogo />
            <Code className={classes.versionStyle}>v1.0</Code>
            <Group ml="auto">
              <OtterkitThemeToggle />
              <GitHubButton />
            </Group>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          className={classes.otterkitStyling}
          p="sm"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 295 }}
        >
          <Navbar.Section grow component={ScrollArea}>
            <OtterkitSearch openState={setOpened} />
            <div>{sidebarLinks}</div>
          </Navbar.Section>
        </Navbar>
      }
    >
      <Container size={630}>
        <TypographyStylesProvider>{props.children}</TypographyStylesProvider>
      </Container>
    </AppShell>
  );
}
