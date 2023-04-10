import {CharactersI} from '../redux/actions/interface';

interface UseFilterDataI {
  resultsCharacters: (CharactersI | undefined)[] | undefined;
  inputValue: string;
}

export const useFilterData = ({
  resultsCharacters,
  inputValue,
}: UseFilterDataI) => {
  const showFilterData = (): (CharactersI | undefined)[] | undefined => {
    if (inputValue !== '' && resultsCharacters) {
      const newValue = resultsCharacters.filter(
        (item: CharactersI | undefined) => item?.name.includes(inputValue),
      );
      return newValue;
    }
    if (inputValue === '') {
      return [];
    }
  };

  return showFilterData;
};
