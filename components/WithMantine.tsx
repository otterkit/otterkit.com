import { PropsWithChildren } from 'react';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

export function WithMantine(props: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'otterkit-color-scheme',
    defaultValue: 'dark',
  });
  const toggleColorScheme = () =>
    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
