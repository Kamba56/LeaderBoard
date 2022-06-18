const list = document.querySelector('.list-container');
const form = document.querySelector('#score-form');
const refresh = document.querySelector('#refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k2m4sDUcfk9YMbs6UScv/scores';

export {
  list, url, form, refresh,
};