module.exports = {
  title: 'React Kawaii',
  sections: [{
      name: 'React Kawaii',
      content: 'docs/Introduction.md',
      description: 'This is the first section description',
    },
    {
      name: 'How to get Started',
      content: 'docs/GetStarted.md',
      description: 'This is the first section description',
    },
    {
      name: 'Components',
      components: () => [
        './src/components/KawaiiBrowser/KawaiiBrowser.jsx',
        './src/components/KawaiiIceCream/KawaiiIceCream.jsx',
        './src/components/KawaiiPlanet/KawaiiPlanet.jsx',
      ],
    },
  ],
}
