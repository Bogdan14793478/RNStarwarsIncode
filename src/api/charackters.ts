import {axiosInstance} from './axios';
import {
  getFirstCharacters,
  saveNewCharacters,
} from '../redux/actions/typeActionCharackters';
import {GetAllInfoRequest} from '../redux/actions/interface';

export function getFirstCharackters() {
  return async (dispatch: any) => {
    // dispatch(actionTogleIsFetchingUser(true));
    axiosInstance.get<GetAllInfoRequest>('/people').then(({data}) => {
      dispatch(getFirstCharacters(data));
      // dispatch(actiongetAllUsers(data));
    });
  };
}

export function getNewCharacters(number: string) {
  return async (dispatch: any) => {
    axiosInstance
      .get<GetAllInfoRequest>(`/people/?page=${number}`)
      .then(({data}) => {
        dispatch(saveNewCharacters(data));
        // console.log(data, 'newdata');
      });
  };
}
