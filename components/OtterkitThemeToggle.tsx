import { ActionIcon, useMantineColorScheme, createStyles } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  otterkitThemeToggle: {
    color: '#6495ED',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
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
        <IconSun size={20} stroke={2} />
      ) : (
        <IconMoonStars size={20} stroke={2} />
      )}
    </ActionIcon>
  );
}
