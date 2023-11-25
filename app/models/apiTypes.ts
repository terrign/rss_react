export interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterSearchparams {
  name?: string;
  type?: string;
  species?: string;
  status?: string | 'Dead' | 'Alive' | 'unknown';
  gender?: string | 'Female' | 'Male' | 'Genderless' | 'unknown';
  page?: number;
}

export interface Character {
  id: number;
  name: string;
  url: string;
  created: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface ResData<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T;
}

export interface ApiResponse<T> {
  status: number;
  statusMessage: string;
  ok: boolean;
  data: ResData<T>;
}
