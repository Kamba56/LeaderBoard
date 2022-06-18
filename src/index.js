import './style.css';
import populate from './modules/populate.js';
import { getData, items } from './modules/getData.js';
import { form, list, refresh } from './modules/elements.js';
import sendData from './modules/sendData.js';

const loadData = async () => {
  await getData();
  items.forEach(populate);
};

loadData();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendData(form.name.value, form.score.value);
  form.reset();
});

refresh.addEventListener('click', () => {
  list.innerHTML = '';
  loadData();
});