import { ActionIcon, createStyles } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  githubButton: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
      color: '#6495ed',
    },
  },
}));

export function GitHubButton() {
  const { classes } = useStyles();

  return (
    <ActionIcon
      size="lg"
      radius="xl"
      component="a"
      href="https://github.com/otterkit"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.githubButton}
    >
      <IconBrandGithub size={18} stroke={2} />
    </ActionIcon>
  );
}
