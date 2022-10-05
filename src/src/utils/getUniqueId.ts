/*
To prevent the SVGs masks being used with the same id
*/

const getUniqueId: any = () => {
  if (typeof window === 'undefined') return;

  const id = Math.random()
    .toString(36)
    .substring(2, 15);

  return id;
};

export default getUniqueId;
