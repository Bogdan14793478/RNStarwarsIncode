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
