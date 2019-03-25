import axios from 'axios';

export function getPoke() {
  return new Promise((resolve, reject) => {
    axios
      .post('https://pokeapi.co/api/v2/pokemon/ditto/')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getPoke2() {
  return new Promise((resolve, reject) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/ditto/')
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
