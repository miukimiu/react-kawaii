export const MOODS = ['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'] as const;

export const DEFAULT_PROPS = {
  size: 240,
  mood: 'blissful',
  color: '#FFD882'
} as const;

export const PROPS_DATA = [
  {
    name: 'size',
    type: 'number | string',
    description: 'Size of the SVG in px.',
    default: DEFAULT_PROPS.size
  },
  {
    name: 'color',
    type: 'string',
    description: 'Color of the SVG.',
    default: DEFAULT_PROPS.color
  },
  {
    name: 'mood',
    type: 'KawaiiMood',
    description: `Mood of the Kawaii face. Choose one of: ${MOODS.map((mood) => `"${mood}"`).join(', ')}`,
    default: DEFAULT_PROPS.mood
  }
];
