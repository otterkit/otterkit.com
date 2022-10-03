import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function OtterkitThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="xl"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6],
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        },
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={16} stroke={2} />
      ) : (
        <IconMoonStars size={16} stroke={2} />
      )}
    </ActionIcon>
  );
}
