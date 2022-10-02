import { useState, useEffect, PropsWithChildren } from 'react';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function WithMantine(props: PropsWithChildren) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const [localStorage, setLocalStorage] = useLocalStorage<ColorScheme>(
    'otterkit-color-scheme',
    'dark'
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setLocalStorage(nextColorScheme);
    setColorScheme(nextColorScheme);
  };

  useEffect(() => {
    setColorScheme(localStorage);
  }, []);

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
