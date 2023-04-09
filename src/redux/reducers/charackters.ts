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
  // chooseCharacter: CharactersI | null;
  countPlanets: number;
  nextPlanets: string;
  previousPlanets: null | string;
  resultsPlanets: PlanetI[];
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
  // chooseCharacter: null,
  // planet
  countPlanets: 0,
  nextPlanets: '',
  previousPlanets: null,
  resultsPlanets: [],
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
    // if i choose save info choose character in store
    // case ActionTypesCharacters.SAVE_CHOOSE_CHARACTER:
    //   return {...state, chooseCharacter: action.payload};
    // load new characters
    case ActionTypesCharacters.ADD_NEW_CHARACTERS:
      const uniqArr = new Set([...state.results, ...action.payload.results]);
      const arr = Array.from(uniqArr);
      return {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous,
        results: arr,
      };
    case ActionTypesCharacters.ADD_FIRSTS_PLANET:
      const copyResults = [...state.results];
      console.log(copyResults, '111');
      const changePlanet = copyResults.map((item: CharactersI | undefined) => {
        for (let i = 0; i < action.payload.results.length; i++) {
          console.log('FOR WORK');
          if (
            action.payload.results[i].residents?.includes(item?.url) &&
            item
          ) {
            item.homeworld = action.payload.results[i].name;
            return item;
          }
          return item;
        }
      });
      console.log(action.payload);
      return {
        ...state,
        countPlanets: action.payload.countPlanets,
        nextPlanets: action.payload.nextPlanets,
        previousPlanets: action.payload.previousPlanets,
        resultsPlanets: action.payload.results,
        results: changePlanet,
      };
    default:
      return state;
  }
};
