import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Code,
  ScrollArea,
  Text,
  MediaQuery,
  Burger,
  Container,
  useMantineTheme,
  TypographyStylesProvider,
  Group,
} from '@mantine/core';
import { PropsWithChildren, useState } from 'react';
import ColorSchemeToggle from '../ColorSchemeToggle';
import { LinksGroup } from '../LinksGroup/LinksGroup';
import { sidebarMetadata } from '../../metadata/sidebarMetadata';


export function OtterkitLayout(props: PropsWithChildren) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const sidebarLinks = sidebarMetadata.map((item) => {
    return <LinksGroup {...item} key={item.label} />
  });

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 275 }}>
          <Navbar.Section 
          grow 
          sx={(theme) => ({
            marginLeft: -theme.spacing.md,
            marginRight: -theme.spacing.md,
          })}
          component={ScrollArea}>
            <div>{sidebarLinks}</div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={64} p="md">
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
      
            <Text sx={{ fontWeight: 500 }}>
              Otterkit COBOL
            </Text>
            <Code sx={{ 
                fontWeight: 700,
                marginLeft: theme.spacing.md,
                marginRight: theme.spacing.md,
              }}>
                v1.0.0
            </Code>
            <Group ml={'auto'}>
              <ColorSchemeToggle />
            </Group>
          </div>
        </Header>
      }
    >
      <Container size={685}>
        <TypographyStylesProvider>
          {props.children}
        </TypographyStylesProvider>
      </Container>
    </AppShell>
  );
}