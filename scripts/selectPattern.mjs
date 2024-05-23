import inquirer from 'inquirer';
import { execSync } from 'child_process';

import { patterns } from './patterns.mjs';

inquirer
  .prompt([
    {
      type: 'list',
      name: 'pattern',
      message: 'Select a design pattern to run:',
      choices: patterns
    }
  ])
  .then(answers => {
    const pattern = answers.pattern;
    console.log(`Selected pattern: ${pattern}`);
    execSync(`npx ts-node ${pattern.toLowerCase()}/main.ts`, { stdio: 'inherit' });
  })
  .catch(error => {
    console.error(error);
  });
