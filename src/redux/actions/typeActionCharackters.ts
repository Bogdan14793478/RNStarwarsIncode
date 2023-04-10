import {GetAllInfoRequest, InfoPlanets} from './interface';

export enum ActionTypesCharacters {
  GET_FIRST_CHARACTERS = 'GET_FIRST_CHARACTERS',
  FAVORITE = 'FAVORITE',
  ADD_NEW_CHARACTERS = 'ADD_NEW_CHARACTERS',
  ADD_FIRSTS_PLANET = 'ADD_FIRSTS_PLANET',
  ADD_NEW_PLANETS = 'ADD_NEW_PLANETS',
  REMOVE_FAVORITE_CHARACTERS = 'REMOVE_FAVORITE_CHARACTERS',
}

export type Action2<T, P> = {type: T; payload: P};

export type GetCharactersType = Action2<
  ActionTypesCharacters.GET_FIRST_CHARACTERS,
  GetAllInfoRequest
>;
export const getFirstCharactersS = (
  payload: GetAllInfoRequest,
): GetCharactersType => ({
  type: ActionTypesCharacters.GET_FIRST_CHARACTERS,
  payload,
});

interface ChooseLikeI {
  name: string;
  gender: string;
}
export type FavoriteDroid = Action2<
  ActionTypesCharacters.FAVORITE,
  ChooseLikeI
>;
export const choosefavoriteDroid = (payload: ChooseLikeI): FavoriteDroid => ({
  type: ActionTypesCharacters.FAVORITE,
  payload,
});

export type GetNewCharactersType = Action2<
  ActionTypesCharacters.ADD_NEW_CHARACTERS,
  GetAllInfoRequest
>;
export const saveNewCharacters = (
  payload: GetAllInfoRequest,
): GetNewCharactersType => ({
  type: ActionTypesCharacters.ADD_NEW_CHARACTERS,
  payload,
});

// Planets
export type GetFirstPlanets = Action2<
  ActionTypesCharacters.ADD_FIRSTS_PLANET,
  InfoPlanets
>;
export const getPlanets = (payload: InfoPlanets): GetFirstPlanets => ({
  type: ActionTypesCharacters.ADD_FIRSTS_PLANET,
  payload,
});

export type GetNewPlanetsType = Action2<
  ActionTypesCharacters.ADD_NEW_PLANETS,
  InfoPlanets
>;
export const saveNewPlanets = (payload: InfoPlanets): GetNewPlanetsType => ({
  type: ActionTypesCharacters.ADD_NEW_PLANETS,
  payload,
});

export type ClearFavoriteCharacters = Action2<
  ActionTypesCharacters.REMOVE_FAVORITE_CHARACTERS,
  boolean
>;
export const clearFavoriteCharacters = (
  payload: boolean,
): ClearFavoriteCharacters => ({
  type: ActionTypesCharacters.REMOVE_FAVORITE_CHARACTERS,
  payload,
});
