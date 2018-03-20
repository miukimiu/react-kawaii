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
        './src/browser/Browser.jsx',
        './src/creditCard/CreditCard.jsx',
        './src/ghost/Ghost.jsx',
        './src/iceCream/IceCream.jsx',
        './src/mug/Mug.jsx',
        './src/planet/Planet.jsx',
        './src/speechBubble/SpeechBubble.jsx',
      ],
    },
  ],
}
