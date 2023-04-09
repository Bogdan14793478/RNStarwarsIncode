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
  // chooseCharacter: CharactersI | null;
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
  // chooseCharacter: null,
  // planet
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
    // if i choose save info choose character in store
    // case ActionTypesCharacters.SAVE_CHOOSE_CHARACTER:
    //   return {...state, chooseCharacter: action.payload};
    // load new characters
    case ActionTypesCharacters.ADD_NEW_CHARACTERS:
      const uniqArr = new Set([...state.results, ...action.payload.results]);
      const arr = Array.from(uniqArr);
      console.log(arr, 'arr ADD_NEW_CHARACTERS');

      // const copyResidentsHash = {...state.residentsHashPlanet};

      // const changePlanet = arr.map(item => {
      //   if (item && item?.homeworld.length < 29) {
      //     return item;
      //   }
      //   if (item && copyResidentsHash[item.url]) {
      //     item.homeworld = createHasObj[item.url];
      //   }
      //   if (item && !copyResidentsHash[item.url]) {
      //     arr.forEach((result: PlanetI) => {
      //   result.residents?.forEach((resident: string) => {
      //     residentsHash[resident] = result.name;
      //   });
      // });
      //   }
      //   return item;
      // });

      return {
        ...state,
        next: action.payload.next,
        previous: action.payload.previous,
        results: arr,
      };
    case ActionTypesCharacters.ADD_FIRSTS_PLANET:
      const copyResults = [...state.results];

      const residentsHash: {[key: string]: string} = {};

      // action.payload.results.forEach((result: PlanetI) => {
      //   result.residents?.forEach((resident: string) => {
      //     residentsHash[resident] = result.name;
      //   });
      // });

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
      // const changePlanet = copyResults.map((item: CharactersI | undefined) => {
      //   for (let i = 0; i < action.payload.results.length; i++) {
      //     if (
      //       action.payload.results[i].residents?.includes(item?.url) &&
      //       item
      //     ) {
      //       item.homeworld = action.payload.results[i].name;
      //     }
      //     return item;
      //   }
      // });
      return {
        ...state,
        countPlanets: action.payload.count,
        nextPlanets: action.payload.next,
        previousPlanets: action.payload.previous,
        resultsPlanets: action.payload.results,
        results: changePlanet,
        residentsHashPlanet: createHasObj,
      };
    default:
      return state;
  }
};
