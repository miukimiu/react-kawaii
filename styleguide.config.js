const path = require('path')

module.exports = {
  title: 'React Kawaii',
  pagePerSection: true,
  sections: [{
      name: 'React Kawaii',
      content: 'docs/ReactKawaii.md',
      description: 'Welcome',
    },
    {
      name: 'Getting Started',
      content: 'docs/GetStarted.md',
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
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600'
      }]
    }
  },
  theme: {

    color: {
      link: '#4B4E6A',
      linkHover: '#2B3847',
      baseBackground: '#fff',
      border: '#D0DAE4',
      sidebarBackground: '#fff',
    },
    fontFamily: {
      base: '"Source Sans Pro", sans-serif'
    }
  },
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuide'),
    SectionsRenderer: path.join(__dirname, 'styleguide/components/Sections'),
    SectionRenderer: path.join(__dirname, 'styleguide/components/Section'),
    "slots/IsolateButton": path.join(__dirname, 'styleguide/components/IsolateButton')
  },
  styleguideDir: 'styleguide/publish'
}