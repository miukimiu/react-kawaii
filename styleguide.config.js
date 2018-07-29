const path = require('path')

module.exports = {
  title: 'React Kawaii',
  pagePerSection: true,
  sections: [
    {
      name: 'React Kawaii',
      content: 'docs/ReactKawaii.md',
      description: 'Welcome',
    },
    {
      name: 'Getting Started',
      content: 'docs/GetStarted.md',
      description: 'lorem ipsum',
    },
    {
      name: 'Components',
      components: './src/**/[A-Z]*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand'
    },
  ],
  skipComponentsWithoutExample: true,
  template: {
   head: {
     links: [
       {
         rel: 'stylesheet',
         href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
       }
     ]
   }
 },
  theme: {
		baseBackground: '#fff',
		link: '#888FDC',
		linkHover: '#3E458F',
		border: '#D0DAE4',
    sidebarBackground: '#fff',
    fontFamily: {
      base: '"Source Sans Pro", sans-serif'
    }
	},
  styleguideComponents: {
		StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
    SectionRenderer: path.join(__dirname, 'styleguide/components/Section')
	},
  styleguideDir: 'styleguide/publish'
}
