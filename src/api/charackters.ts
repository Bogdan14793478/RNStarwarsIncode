import {axiosInstance} from './axios';
import {
  getFirstCharacters,
  getPlanets,
  saveNewCharacters,
} from '../redux/actions/typeActionCharackters';
import {GetAllInfoRequest, InfoPlanets} from '../redux/actions/interface';

export function getFirstCharackters() {
  return async (dispatch: any) => {
    try {
      const {data} = await axiosInstance.get<GetAllInfoRequest>('/people');
      console.log(data, 'data');
      dispatch(getFirstCharacters(data));
      return true;
    } catch (error: unknown | undefined) {
      throw new Error(String(error));
    }
    // dispatch(actionTogleIsFetchingUser(true));
    // axiosInstance.get<GetAllInfoRequest>('/people').then(({data}) => {
    //   dispatch(getFirstCharacters(data));
    //   return true;
    // dispatch(actiongetAllUsers(data));
    // });
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
      // console.log(data, 'data Planet');
      dispatch(getPlanets(data));
    });
  };
};
