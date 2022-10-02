import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Code,
  ScrollArea,
  Text,
  MediaQuery,
  Burger,
  Container,
  useMantineTheme,
  TypographyStylesProvider,
  createStyles,
  Group,
} from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import ColorSchemeToggle from '../ColorSchemeToggle';
import LinksGroup from '../LinksGroup';
import { appMetadata } from '../../metadata/appMetadata';

const useStyles = createStyles((theme) => ({
  otterkitNavbars: {
    backgroundColor:
      theme.colorScheme === 'dark' 
      ? theme.colors.dark[8] 
      : theme.colors.gray[0],
    borderColor: 
      theme.colorScheme === 'dark'
      ? theme.colors.dark[8]
      : theme.colors.gray[0],
  },
  otterkitHeader: {
    backgroundColor:
      theme.colorScheme === 'dark' 
      ? theme.colors.dark[8] 
      : theme.colors.gray[0],
    borderColor: 
      theme.colorScheme === 'dark'
      ? theme.colors.dark[6]
      : theme.colors.gray[2],
  },
  versionStyle: {
    fontWeight: 700,
    borderRadius: theme.radius.xl,
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    backgroundColor:
    theme.colorScheme === 'dark' 
    ? theme.colors.dark[6] 
    : theme.colors.gray[2],
  }
}));

export function OtterkitLayout(props: PropsWithChildren) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const sidebarLinks = appMetadata.map((item) => {
    return <LinksGroup {...item} key={item.label} />
  });

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="md"
      navbar={
        <Navbar className={classes.otterkitNavbars} p="sm" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 235, lg: 275 }}>
          <Navbar.Section grow component={ScrollArea}>
            <div>{sidebarLinks}</div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header className={classes.otterkitHeader} height={64} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((open) => !open)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
      
            <Text sx={{ fontWeight: 700 }}>
              Otterkit COBOL Docs
            </Text>
            <Code className={classes.versionStyle}>
                v1.0.0
            </Code>
            <Group ml={'auto'}>
              <ColorSchemeToggle />
            </Group>
          </div>
        </Header>
      }
      aside={
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Aside className={classes.otterkitNavbars} p="md" hiddenBreakpoint="md" width={{ sm: 235, lg: 275 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
    >
      <Container size={630}>
        <TypographyStylesProvider>
          {props.children}
        </TypographyStylesProvider>
      </Container>
    </AppShell>
  );
}