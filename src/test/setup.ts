import '@testing-library/jest-dom';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { mockRes } from './mockedResponse';

const res = {
  name: 'Star Destroyer',
  model: 'Imperial I-class Star Destroyer',
  manufacturer: 'Kuat Drive Yards',
  cost_in_credits: '150000000',
  length: '1,600',
  max_atmosphering_speed: '975',
  crew: '47,060',
  passengers: 'n/a',
  cargo_capacity: '36000000',
  consumables: '2 years',
  hyperdrive_rating: '2.0',
  MGLT: '60',
  starship_class: 'Star Destroyer',
  pilots: [],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/'],
  created: '2014-12-10T15:08:19.848000Z',
  edited: '2014-12-20T21:23:49.870000Z',
  url: 'https://swapi.dev/api/starships/3/',
};

export const handlers = [
  http.get('https://swapi.dev/api/starships/3', () => {
    return HttpResponse.json(res);
  }),
  http.get('https://swapi.dev/api/starships/', () => {
    return HttpResponse.json(mockRes);
  }),
];

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});