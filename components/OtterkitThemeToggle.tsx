import { ActionIcon, useMantineColorScheme, createStyles } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  otterkitThemeToggle: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: '#6495ed',
    },
  },
}));

export function OtterkitThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="xl"
      className={classes.otterkitThemeToggle}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={18} stroke={2} />
      ) : (
        <IconMoonStars size={18} stroke={2} />
      )}
    </ActionIcon>
  );
}
