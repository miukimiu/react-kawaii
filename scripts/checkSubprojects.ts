// typescript script to find all the pnpm subprojects and check they have a "lint" and "tsc" script

import childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const command = `pnpm m ls --json --depth=-1`;

type Project = {
  name: string;
  version: string;
  path: string;
  private: boolean;
};

const projects = JSON.parse(childProcess.execSync(command).toString()) as Project[];

const subProjects = projects
  .filter((project) => project.name !== 'xata-private')
  .map((project) => {
    const packageJson = JSON.parse(fs.readFileSync(path.join(project.path, 'package.json')).toString());
    return { ...project, packageJson };
  });

const EXCLUDE_FROM_LINT = ['tsconfig', 'eslint-config-react-kawaii'];
const EXCLUDE_FROM_TSC = ['tsconfig', 'eslint-config-react-kawaii'];

const errors: string[] = [];
for (const subProject of subProjects) {
  const { packageJson } = subProject;
  const { scripts = {}, name } = packageJson;

  if (!EXCLUDE_FROM_LINT.includes(name) && !scripts.lint) {
    errors.push(`Subproject ${name} is missing a lint script`);
  }

  if (!EXCLUDE_FROM_TSC.includes(name) && !scripts.tsc) {
    errors.push(`Subproject ${name} is missing a tsc script`);
  }
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('All subprojects have a lint and tsc script');
