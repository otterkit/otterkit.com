import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6],
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={20} stroke={2} />
      ) : (
        <IconMoonStars size={20} stroke={2} />
      )}
    </ActionIcon>
  );
}
