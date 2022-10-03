import {
  AppShell,
  Header,
  Code,
  Text,
  Button,
  Container,
  createStyles,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { OtterkitThemeToggle } from '../components/OtterkitThemeToggle';
import { GitHubButton } from '../components/GitHubButton';

const useStyles = createStyles((theme) => ({
  otterkitStyling: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
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

  gridContainer: {
    display: 'grid',
    placeContent: 'center',
    height: 'calc(100vh - 64px)',
  },

  title: {
    fontSize: 64,
    fontWeight: 900,
    lineHeight: 1.2,
    margin: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.colors.gray[9],

    ['@media (max-width: 755px)']: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    ['@media (max-width: 755px)']: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,

    ['@media (max-width: 755px)']: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingInline: 32,

    ['@media (max-width: 755px)']: {
      height: 54,
      paddingInline: 18,
      flex: 1,
    },
  },
}));

export default function Otterkit() {
  const theme = useMantineTheme()
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        className={classes.otterkitStyling}
        padding="md"
        header={
          <Header className={classes.otterkitStyling} height={64} p="md">
            <div className={classes.flexContainer}>
              <Text sx={{ fontWeight: 700 }}>Otterkit COBOL</Text>
              <Code className={classes.versionStyle}>v1.0.0</Code>
              <Group ml="auto">
                <GitHubButton />
                <OtterkitThemeToggle />
              </Group>
            </div>
          </Header>
        }
      >
        <Container size={845} className={classes.gridContainer}>
          <h1 className={classes.title}>
            A
            <Text component="span" color={theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6]} inherit>
              {' '}free{' '}
            </Text>
            and
            <Text component="span" color={theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6]} inherit>
              {' '}open source{' '}
            </Text>
            Standard COBOL compiler
          </h1>

          <Text className={classes.description} color="dimmed">
            Build stable and reliable COBOL backend applications without having
            to worry about dialects or extensions — Otterkit COBOL allow you to build 
            your COBOL application on top of modern standard features.
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              component={NextLink}
              href='/docs'
              className={classes.control}
              variant="filled"
            >
              Get started
            </Button>
          </Group>
        </Container>
      </AppShell>
    </>
  );
}

