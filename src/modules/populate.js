import { list } from './elements.js';

const populate = (item) => {
  list.innerHTML
  += `<li class="list-item pad">${item.user}: ${item.score}</li>`;
};

export default populate;