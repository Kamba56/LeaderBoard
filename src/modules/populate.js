import { list } from "./elements";

const populate = (item) => {
  list.innerHTML += 
  `<li class="list-item pad">${item.name}: ${item.score}</li>`;
}

export default populate;