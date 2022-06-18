import { url } from './elements.js';

const sendData = async (user, score) => {
  await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
};

export default sendData;