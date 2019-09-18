const BASE_URL = 'http://localhost:3000/viagens';

export default {
  getAll: () => {
    return fetch(BASE_URL).then((resultado) => {
      return resultado.json();
    });
  },
  remove: (id) => {
    return fetch(BASE_URL + '/' + id, { method: 'DELETE' });
  },
  criar: (viagem) => {
    return fetch(BASE_URL, { method: 'POST', body: JSON.stringify(viagem), headers: { 'content-type': 'application/json' } });
  }
};
