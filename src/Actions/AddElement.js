import { ADD_ELEMENT, ADD_PROPERTIES, SELECTED_ID } from '../types';
import jsonData from '../NewElements.json';

export const addElement = () => dispatch => {
  dispatch({
    type: ADD_ELEMENT,
    payload: jsonData,
  });
};

export const addProperty = (property, id) => dispatch => {
  dispatch({
    type: ADD_PROPERTIES,
    payload: property,
    id: id
  });
};

export const addId = (id, type) => dispatch => {
  dispatch({
    id: SELECTED_ID,
    payload: type,
    id: id
  });
}
