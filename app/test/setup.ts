import "@testing-library/jest-dom";
import { http, HttpResponse } from "msw";
import { beforeAll, afterEach, afterAll } from "vitest";
import { setupServer } from "msw/node";
import { characterRes2, characterRes82, mockRes } from "./mockedResponse";

export const handlers = [
  http.get("https://rickandmortyapi.com/api/character/2", () => {
    return HttpResponse.json(characterRes2);
  }),
  http.get("https://rickandmortyapi.com/api/character/82", () => {
    return HttpResponse.json(characterRes82);
  }),
  http.get("https://rickandmortyapi.com/api/character", () => {
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
