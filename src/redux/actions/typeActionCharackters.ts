import {GetAllInfoRequest} from './interface';

export enum ActionTypesCharacters {
  GET_FIRST_CHARACTERS = 'GET_FIRST_CHARACTERS',
  FAVORITE = 'FAVORITE',
  SAVE_CHOOSE_CHARACTER = 'SAVE_CHOOSE_CHARACTER',
  ADD_NEW_CHARACTERS = 'ADD_NEW_CHARACTERS',
}

export type Action2<T, P> = {type: T; payload: P};

export type GetCharactersType = Action2<
  ActionTypesCharacters.GET_FIRST_CHARACTERS,
  GetAllInfoRequest
>;
export const getFirstCharacters = (
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

export type SaveCharacter = Action2<
  ActionTypesCharacters.SAVE_CHOOSE_CHARACTER,
  ChooseLikeI
>;
export const saveChooseCharacter = (payload: ChooseLikeI): SaveCharacter => ({
  type: ActionTypesCharacters.SAVE_CHOOSE_CHARACTER,
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
