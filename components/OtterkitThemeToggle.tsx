import { ActionIcon, useMantineColorScheme, createStyles } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  otterkitThemeToggle: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6],
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
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
        <IconSun size={16} stroke={2} />
      ) : (
        <IconMoonStars size={16} stroke={2} />
      )}
    </ActionIcon>
  );
}
