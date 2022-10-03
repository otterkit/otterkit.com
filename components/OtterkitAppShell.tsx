import {
  AppShell,
  Navbar,
  Header,
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
  Autocomplete,
  Divider,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { PropsWithChildren, useState } from 'react';
import { useRouter } from 'next/router';
import { OtterkitThemeToggle } from './OtterkitThemeToggle';
import { LinksGroup } from './LinksGroup';
import { appMetadata } from '../metadata/appMetadata';

const useStyles = createStyles((theme) => ({
  otterkitStyling: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
  },
  versionStyle: {
    fontWeight: 700,
    borderRadius: theme.radius.xl,
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
  },
}));

export function OtterkitAppShell(props: PropsWithChildren) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const router = useRouter();
  const sidebarLinks = appMetadata.map((item) => (
    <LinksGroup closeNav={setOpened} {...item} key={item.label} />
  ));
  const autocompleteLabels = appMetadata.map((item) => item.label);

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="md"
      header={
        <Header className={classes.otterkitStyling} height={64} p="md">
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

            <Text sx={{ fontWeight: 700 }}>Otterkit COBOL</Text>
            <Code className={classes.versionStyle}>v1.0.0</Code>
            <Group ml="auto">
              <OtterkitThemeToggle />
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
          width={{ sm: 235, lg: 275 }}
        >
          <Navbar.Section grow component={ScrollArea}>
            <Autocomplete
              radius="xl"
              placeholder="Search (' / ' to focus)"
              icon={<IconSearch size={16} />}
              limit={5}
              data={autocompleteLabels}
              onItemSubmit={(event) =>
                router.push(appMetadata.find((item) => event.value === item.label)?.href!)
              }
            />
            <Divider my="sm" />
            <div>{sidebarLinks}</div>
          </Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <Aside
            className={classes.otterkitStyling}
            p="md"
            hiddenBreakpoint="md"
            width={{ sm: 235, lg: 275 }}
          >
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
    >
      <Container size={630}>
        <TypographyStylesProvider>{props.children}</TypographyStylesProvider>
      </Container>
    </AppShell>
  );
}
