import { ActionIcon, createStyles } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  githubButton: {
    color: '#6495ed',
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
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
      <IconBrandGithub size={20} stroke={2} />
    </ActionIcon>
  );
}
