/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: 'react-kawaii/nextjs',
  linterOptions: {
    exclude: ['src/app/mdx-components.tsx']
  }
};
