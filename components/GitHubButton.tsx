import { ActionIcon, createStyles } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  githubButton: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.colors.blue[3] : theme.colors.blue[6],
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
    },
  },
}));

export function GitHubButton() {
  const { classes } = useStyles();

  return (
    <ActionIcon
      size="lg"
      radius="xl"
      component='a'
      href="https://github.com/otterkit"
      target="_blank"
      rel="noopener noreferrer"
      className={classes.githubButton}
    >
      <IconBrandGithub size={16} stroke={2} />
    </ActionIcon>
  );
}