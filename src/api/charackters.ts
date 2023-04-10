import {axiosInstance} from './axios';
import {
  getFirstCharacters,
  getPlanets,
  saveNewCharacters,
  saveNewPlanets,
} from '../redux/actions/typeActionCharackters';
import {GetAllInfoRequest, InfoPlanets} from '../redux/actions/interface';

export function getFirstCharacters() {
  return async (dispatch: any) => {
    try {
      const {data} = await axiosInstance.get<GetAllInfoRequest>('/people');
      dispatch(getFirstCharacters(data));
      return true;
    } catch (error: unknown | undefined) {
      throw new Error(String(error));
    }
  };
}

export function getNewCharacters(number: string) {
  return async (dispatch: any) => {
    axiosInstance
      .get<GetAllInfoRequest>(`/people/?page=${number}`)
      .then(({data}) => {
        dispatch(saveNewCharacters(data));
      });
  };
}

export const getFirstPlanets = () => {
  return async (dispatch: any) => {
    axiosInstance.get<InfoPlanets>(`/planets`).then(({data}) => {
      dispatch(getPlanets(data));
    });
  };
};

export function getNewPlanets(number: string) {
  return async (dispatch: any) => {
    axiosInstance
      .get<InfoPlanets>(`/planets/?page=${number}`)
      .then(({data}) => {
        dispatch(saveNewPlanets(data));
      });
  };
}
