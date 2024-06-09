import { Config, transform } from '@svgr/core';
import jsx from '@svgr/plugin-jsx';
import prettier from '@svgr/plugin-prettier';
import svgo from '@svgr/plugin-svgo';
import { pascalCase } from 'change-case';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { glob } from 'glob';

const paths = [
  {
    input: './src/svgs/*.svg',
    output: './src/components'
  }
];

const iconTemplate: Config['template'] = ({ componentName, jsx, exports }, { tpl }) => {
  return tpl`
import { SVGAttributes } from 'react'
${`\n`}
type IconProps = {
  size?: number;
} & SVGAttributes<SVGElement>;
${`\n`}
const ${componentName} = ({ size = 180, ...props }: IconProps) => {
	return ${jsx}
}

${exports}
`;
};

async function main() {
  for (const path of paths) {
    const { input, output } = path;
    const files = await glob(input);

    const components = [];

    for (const file of files) {
      const content = await readFile(file, 'utf8');
      const fileName = file.split('/').pop()?.replace('.svg', '');
      if (!fileName) continue;

      const componentName = pascalCase(fileName);

      const result = await transform(
        content,
        {
          typescript: true,
          namedExport: `${componentName}Illustration`,
          exportType: 'named',
          plugins: [svgo, jsx, prettier],
          svgProps: {
            width: '{size}',
            height: '{size * 0.6}',
            viewBox: '0 0 180 106'
          },
          template: iconTemplate,
          replaceAttrValues: {
            '#F0EDFF': 'var(--chakra-colors-illustrationBg)',
            '#AAA1D6': 'var(--chakra-colors-illustrationElement)',
            '#fff': 'var(--chakra-colors-contrastEmpty)'
          }
        },
        { componentName }
      );

      components.push(componentName);

      const outputPath = `${output}/${componentName}.tsx`;
      await mkdir(output, { recursive: true }); // Create the directory if it doesn't exist
      await writeFile(outputPath, result);
    }

    const indexContent = components.map((component) => `export * from './${component}';`).join('\n');
    await writeFile(`${output}/index.ts`, indexContent);
  }
}

main();
