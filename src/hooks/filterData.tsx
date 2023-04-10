import {CharactersI} from '../redux/actions/interface';

interface UseFilterDataI {
  resultsCharacters: CharactersI[];
  inputValue: string;
}

export const useFilterData = ({
  resultsCharacters,
  inputValue,
}: UseFilterDataI) => {
  const showFilterData = (): (CharactersI | undefined)[] | undefined => {
    if (inputValue !== '') {
      const newValue = resultsCharacters.filter((item: CharactersI) =>
        item?.name.includes(inputValue),
      );
      return newValue;
    }
    if (inputValue === '') {
      return [];
    }
  };

  return showFilterData;
};
