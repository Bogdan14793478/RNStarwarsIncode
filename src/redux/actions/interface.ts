import {InitialInfo} from '../reducers/charackters';

export interface RootState {
  info: InitialInfo;
}

export interface CharactersI {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface GetAllInfoRequest {
  count: number;
  next: string;
  previous: null;
  results: CharactersI[];
}

export interface DataType {
  data: GetAllInfoRequest;
}

export interface PlanetI {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface InfoPlanets {
  countPlanets: number;
  nextPlanets: string;
  previousPlanets: null | string;
  resultsPlanets: PlanetI[];
}
