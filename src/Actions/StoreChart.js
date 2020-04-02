import { STORE_CHART } from '../types';

export const storeChart = (data) => dispatch => {

  dispatch({
    type: STORE_CHART,
    payload: data,
  });
};