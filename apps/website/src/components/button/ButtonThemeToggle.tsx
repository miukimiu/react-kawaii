'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';

export const ButtonThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <IconButton
      color="gray"
      variant="soft"
      size="1"
      highContrast
      onClick={() => {
        setTheme(isDarkTheme ? 'light' : 'dark');
      }}
    >
      {isDarkTheme ? <SunIcon width="18" height="18" /> : <MoonIcon width="18" height="18" />}
    </IconButton>
  );
};
