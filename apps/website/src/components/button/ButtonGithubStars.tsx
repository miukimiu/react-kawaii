'use server';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Link, Text } from '@radix-ui/themes';
import '@radix-ui/themes/tokens.css';
import { isNumber } from 'lodash';
import { FC } from 'react';
import './buttonGitHubStars.css';

type GitHubRepo = {
  stargazers_count: number;
};

const fetchGitHubRepoStars = async (): Promise<number | undefined> => {
  try {
    const response = await fetch('https://api.github.com/repos/miukimiu/react-kawaii');
    if (!response.ok) {
      throw new Error(`Error fetching repository: ${response.statusText}`);
    }
    const repo: GitHubRepo = await response.json();
    return repo.stargazers_count;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const formatNumber = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  } else {
    return num;
  }
};

export const ButtonGitHubStars: FC = async () => {
  const githubStars = await fetchGitHubRepoStars();
  return (
    <Link href="https://github.com/miukimiu/react-kawaii" color="gray" highContrast>
      <span className="buttonGitHubStars">
        <GitHubLogoIcon />

        {isNumber(githubStars) && <Text weight="medium">{formatNumber(githubStars)}</Text>}
      </span>
    </Link>
  );
};
