// return the divide the size of the face's width inside the Figma component SVG
// by the size of the face's width (66px) inside of the moods Figma frame
export const getFaceScale = (size: number) => {
  return size / 66;
};
