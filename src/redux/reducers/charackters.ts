import {workWithHasObj} from '../../utils/helpers';
import {CharactersI, PlanetI} from '../actions/interface';
import {ActionTypesCharacters} from '../actions/typeActionCharackters';

export type InitialInfo = {
  count: number;
  next: string;
  previous: null;
  results: CharactersI[] | (CharactersI | undefined)[];
  isLoad: boolean;
  favoriteMans: string[];
  favoriteWoman: string[];
  favoriteDroid: string[];
  countPlanets: number;
  nextPlanets: string;
  previousPlanets: null | string;
  resultsPlanets: PlanetI[];
  //
  residentsHashPlanet: {[key: string]: string};
};

const initial: InitialInfo = {
  count: 0,
  next: '',
  previous: null,
  results: [],
  isLoad: true,
  favoriteMans: [],
  favoriteWoman: [],
  favoriteDroid: [],
  countPlanets: 0,
  nextPlanets: '',
  previousPlanets: null,
  resultsPlanets: [],
  //
  residentsHashPlanet: {},
};

export const stateInfoReducer = (
  state = initial,
  action: any,
): InitialInfo | undefined => {
  switch (action.type) {
    case ActionTypesCharacters.GET_FIRST_CHARACTERS:
      return {
        ...state,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        results: action.payload.results,
      };
    case ActionTypesCharacters.FAVORITE:
      console.log(action.payload, 'action.payload');
      const newDroid = action.payload.name;
      // droid
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female' &&
        state.favoriteDroid.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteDroid: state.favoriteDroid.filter(
            (item: string) => item !== newDroid,
          ),
        };
      }
      if (
        action.payload.gender !== 'male' &&
        action.payload.gender !== 'female' &&
        !state.favoriteDroid.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteDroid: [...state.favoriteDroid, newDroid],
        };
      }
      // male
      if (
        action.payload.gender === 'male' &&
        state.favoriteMans.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteMans: state.favoriteMans.filter(
            (item: string) => item !== newDroid,
          ),
        };
      }
      if (
        action.payload.gender === 'male' &&
        !state.favoriteMans.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteMans: [...state.favoriteMans, newDroid],
        };
      }
      // fimale
      if (
        action.payload.gender === 'female' &&
        state.favoriteWoman.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteWoman: state.favoriteWoman.filter(
            (item: string) => item !== newDroid,
          ),
        };
      }
      if (
        action.payload.gender === 'female' &&
        !state.favoriteWoman.includes(newDroid)
      ) {
        return {
          ...state,
          favoriteWoman: [...state.favoriteWoman, newDroid],
        };
      }
      return {...state};

    case ActionTypesCharacters.ADD_NEW_CHARACTERS:
      const uniqArr = new Set([...state.results, ...action.payload.results]);
      const arr = Array.from(uniqArr);

      const changePlanetAllCharacters = arr.map(item => {
        if (item && state.residentsHashPlanet[item.url]) {
          item.homeworld = state.residentsHashPlanet[item.url];
        }
        return item;
      });

      return {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous,
        results: changePlanetAllCharacters,
        // isLoad: false,
      };
    case ActionTypesCharacters.ADD_FIRSTS_PLANET:
      const copyResults = [...state.results];

      const residentsHash: {[key: string]: string} = {};

      const createHasObj = workWithHasObj(
        action.payload.results,
        residentsHash,
      );

      const changePlanet = copyResults.map(item => {
        if (item && residentsHash[item.url]) {
          item.homeworld = createHasObj[item.url];
        }
        return item;
      });
      return {
        ...state,
        countPlanets: action.payload.count,
        nextPlanets: action.payload.next,
        previousPlanets: action.payload.previous,
        resultsPlanets: action.payload.results,
        results: changePlanet,
        residentsHashPlanet: createHasObj,
      };

    case ActionTypesCharacters.ADD_NEW_PLANETS:
      const copyHas = {...state.residentsHashPlanet};
      const cupdateHasObj = workWithHasObj(action.payload.results, copyHas);
      return {
        ...state,
        residentsHashPlanet: cupdateHasObj,
        countPlanets: action.payload.count,
        nextPlanets: action.payload.next,
        previousPlanets: action.payload.previous,
        resultsPlanets: action.payload.results,
      };
    case ActionTypesCharacters.REMOVE_FAVORITE_CHARACTERS: {
      return {...state, favoriteMans: [], favoriteWoman: [], favoriteDroid: []};
    }
    default:
      return state;
  }
};
