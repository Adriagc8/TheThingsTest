import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
  cloud: {
    projectID: 3696037,
    name: 'Test (09/05/2024-23:31:31)'
  }
};

export default function() {
  const url = 'http://localhost:3141/users';
  const words = ['Sunny', 'Blue', 'Moon', 'Star', 'Sky', 'Ocean', 'Forest', 'Mountain', 'River', 'Dawn', 'Dusk', 'Night', 'Day'];
  const now = new Date();
  const seed = now.getTime();
  const randomIndex1 = Math.floor(seed % words.length);
  const randomIndex2 = Math.floor((seed * 12345) % words.length);
  let data = { name: words[randomIndex1] ,surnames: words[randomIndex2] };
  http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json', 'x-api-key':'aa743d33b9904fd183bffe7a542d09f6442e559f7bacb4e24d0c04b46aaaab46' }
  });
  sleep(1);
  http.get(url);
  sleep(1);
  http.get(`${url}?name=${words[randomIndex1]}`);
  sleep(1);
  http.get(`${url}?surnames=${words[randomIndex2]}`);
  sleep(1);
  http.get(`${url}?name=${words[randomIndex1]}&surnames=${words[randomIndex2]}`);

}