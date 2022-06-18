import { url } from './elements.js';

const items = [];

const getData = async () => {
  const response = await fetch(url);
  const scores = await response.json();
  const x = await scores.result.sort((a, b) => b.score - a.score);
  items.length = 0;
  x.forEach((element) => {
    items.push(element);
  });
};

export { items, getData };