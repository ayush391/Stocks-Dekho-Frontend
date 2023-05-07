const COLORS = [
  '#86A3B8',
  '#B08BBB',
  '#ECA869',
  '#9D3C72',
  '#6D67E4',
  '#E96479',
  '#183A1D',
  '#674188',
  '#88A47C',
  '#51175F'
];

export const getRandomColor = (seed) => {
  let x = Math.sin(seed++) * 10000;
  x = x - Math.floor(x);
  x = (x * 1000).toString()[2];
  let result = COLORS[x % COLORS.length];
  return result;
};
