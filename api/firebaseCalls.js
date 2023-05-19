import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const patch = (firebaseKey) => new Promise((resolve, reject) => [
  fetch(`${dbUrl}/${firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ firebaseKey }),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject),
]);

const postChat = (payload) => new Promise((resolve, reject) => [
  fetch(`${dbUrl}/.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      patch(data.name).then(resolve);
    })
    .catch(reject),
]);

const getSaved = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export { postChat, getSaved };
