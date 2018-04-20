import fetch from './fetch';

const key = '4cfaa11fbc7d9b3a1559b643f1798c60';
const url = 'https://gateway.marvel.com:443/v1/public/';

const getUrl = name => `${url}/characters?name=${name}&apikey=${key}`;

async function get(name) {
  const url = getUrl(name);
  return fetch(url);
}

export default {
  get
};
