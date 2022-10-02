import { useState } from 'react';
import Link from 'next/link';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles } from '@mantine/core';
import { TablerIcon, IconPlus, IconMinus } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 600,
    display: 'grid',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.xl,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: 
        theme.colorScheme === 'dark' 
        ? theme.colors.dark[7] 
        : theme.colors.gray[1],
      color: 
        theme.colorScheme === 'dark' 
        ? theme.white 
        : theme.black,
    },
  },

  link: {
    fontWeight: 600,
    display: 'grid',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: theme.spacing.md,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: theme.radius.xl,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[6],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  iconStyles: {
    backgroundColor: 
      theme.colorScheme === 'dark'
      ? theme.colors.dark[6]
      : theme.colors.gray[2], 
    color:
      theme.colorScheme === 'dark'
      ? theme.colors.blue[3]
      : theme.colors.blue[6]
  }
}));

interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  href?: string;
  links?: { label: string; href: string }[];
}

export function LinksGroup({ icon: Icon, label, links, href }: LinksGroupProps) {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.href} key={link.label} passHref>
      <Text
        component="a"
        className={classes.link}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <>
      {href 
        ? <Link href={href} passHref>
            <UnstyledButton component="a" onClick={() => setOpened((opened) => !opened)} className={classes.control}>
              <Group position="apart" spacing={0}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ThemeIcon radius="xl" size="lg" className={classes.iconStyles}>
                    <Icon size={16} />
                  </ThemeIcon>
                  <Box ml="md">{label}</Box>
                </Box>
                {hasLinks && (
                  !opened 
                  ? <IconPlus size={16} stroke={2}/> 
                  : <IconMinus size={16} stroke={2}/>
                )}
              </Group>
            </UnstyledButton>
          </Link>

        : <UnstyledButton component="a" onClick={() => setOpened((opened) => !opened)} className={classes.control}>
            <Group position="apart" spacing={0}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeIcon radius="xl" size="lg" className={classes.iconStyles}>
                  <Icon size={16} />
                </ThemeIcon>
                <Box ml="md">{label}</Box>
              </Box>
              {hasLinks && (
                !opened 
                ? <IconPlus size={16} stroke={2}/> 
                : <IconMinus size={16} stroke={2}/>
              )}
            </Group>
          </UnstyledButton>
      }

      {hasLinks && <Collapse in={opened}>{items}</Collapse>}
    </>
  );
}