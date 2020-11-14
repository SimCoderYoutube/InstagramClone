import * as React from 'react';
import { createTheming } from '../..';

type Theme = {
  primaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
};

const themes: { [key: string]: Theme } = {
  default: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#FFC777',
    textColor: '#504f4d',
    secondaryColor: '#7F5315',
  },
  dark: {
    primaryColor: '#FFA72A',
    accentColor: '#458622',
    backgroundColor: '#504f4d',
    textColor: '#FFC777',
    secondaryColor: '#252525',
  },
};

const { ThemeProvider, withTheme } = createTheming<Theme>(themes.default);

type TitleComponentProps = {
  title: string;
  theme: Theme;
};

const TitleComponent = ({ title, theme }: TitleComponentProps) => (
  <div
    style={{
      backgroundColor: theme.backgroundColor,
      color: theme.primaryColor,
    }}
  >
    {title}
  </div>
);

const ThemedTitle = withTheme(TitleComponent);

const App = () => (
  <ThemeProvider theme={themes.default}>
    <ThemedTitle
      title="React Theme Provider"
      theme={{ primaryColor: 'pink' }}
    />
    <ThemedTitle title="Second title" />
  </ThemeProvider>
);
