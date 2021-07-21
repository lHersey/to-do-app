import React, { FC } from 'react';
import { useMemo } from 'react';
import { DefaultTheme, ThemeProvider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

import { THEME } from '../../styles/theme';

const Providers: FC = props => {
  const { children } = props;

  const paperTheme = useMemo<typeof DefaultTheme>(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
      },
    }),
    [],
  );

  return (
    <ThemeProvider theme={THEME}>
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
    </ThemeProvider>
  );
};

export default Providers;
