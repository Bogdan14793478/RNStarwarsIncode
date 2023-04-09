import {PlanetI} from '../redux/actions/interface';

export const workWithHasObj = (
  results: PlanetI[],
  obj: {[key: string]: string},
) => {
  results.forEach((result: PlanetI) => {
    result.residents?.forEach((resident: string) => {
      obj[resident] = result.name;
    });
  });
  return obj;
};

export const loadNewInfo = (next: string, func: any, type: string) => {
  return async (dispatch: any) => {
    if (next === '') return;
    if (next !== null) {
      const number = next.split('=');
      console.log(number, 'number next page');
      dispatch(func(number[1]));
    }
    if (next === null && type === 'people') {
      console.log('END Characters');
    }
  };
};
