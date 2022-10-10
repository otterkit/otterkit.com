import { useState, useId } from 'react';
import { AppMetadataProps } from '../metadata/appMetadata';
import { NextLink } from '@mantine/next';
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles, MediaQuery } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 600,
    display: 'grid',
    width: '100%',
    paddingBlock: theme.spacing.xs,
    paddingInline: theme.spacing.sm,
    borderRadius: theme.radius.xl,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 600,
    display: 'block',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingBlock: theme.spacing.xs,
    paddingInline: theme.spacing.lg,
    marginInline: 16,
    borderRadius: theme.radius.xl,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  iconStyles: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    color: "#6495ED",
  },
}));

export function GroupedLinks({ icon: Icon, label, links, href, closeNav }: AppMetadataProps) {
  const { classes } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const items = (hasLinks ? links : []).map((link) => (
    <MediaQuery
      largerThan="sm"
      styles={{ width: 234 }}
    >
      <Text
        component={NextLink}
        href={link.href}
        key={useId()}
        onClick={() => closeNav(!true)}
        className={classes.link}
      >
        {link.label}
      </Text>
    </MediaQuery>
  ));

  return (
    <>
      <UnstyledButton
        component={NextLink}
        {...(href ? { href } : { href: 'javascript://' })}
        onClick={() => {
          setOpened((toggle) => !toggle);
          href && closeNav(!true);
        }}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon radius="xl" size="lg" className={classes.iconStyles}>
              <Icon size={16} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks &&
            (!opened ? <IconPlus size={16} stroke={2} /> : <IconMinus size={16} stroke={2} />)}
        </Group>
      </UnstyledButton>

      {hasLinks && <Collapse in={opened}>{items}</Collapse>}
    </>
  );
}
