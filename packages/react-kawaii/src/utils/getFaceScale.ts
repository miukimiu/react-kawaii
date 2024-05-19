// Return the ratio of the components face's width in the Figma component SVG
// The original face's width in the moods Figma frame corresponds to 66px
export const getFaceScale = (size: number) => {
  return size / 66;
};
