'use client';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import './buttonThemeToggle.css';

export const ButtonThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkTheme = theme === 'dark';

  return (
    <IconButton
      className="buttonThemeToggle"
      color="gray"
      variant="soft"
      size="1"
      highContrast
      onClick={() => {
        setTheme(isDarkTheme ? 'light' : 'dark');
      }}
    >
      {!mounted ? (
        <AiOutlineLoading3Quarters className="buttonThemeToggle__loading" />
      ) : isDarkTheme ? (
        <SunIcon width="18" height="18" />
      ) : (
        <MoonIcon width="18" height="18" />
      )}
    </IconButton>
  );
};
