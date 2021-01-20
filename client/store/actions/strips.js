import axios from '../../axios';
import * as actionTypes from './actionTypes';

export const receiveStrips = (strips) => ({
  type: actionTypes.RECEIVE_STRIPS, strips
})

export const requestFailed = (err) => ({
  type: actionTypes.REQUEST_STRIPS_FAILED, err
})

export const receiveStripInfo = (info) => ({
  type: actionTypes.RECEIVE_STRIP_INFO, info
})

export const receiveStripInfoFailed = (err) => ({
  type: actionTypes.REQUEST_STRIPS_INFO_FAILED, err
})

export const fetchAllStrips = () => {
  return dispatch => {
      axios.get( '/getAllStrips' )
          .then( response => {
             dispatch(receiveStrips(response.data));
          })
          .catch( error => {
              dispatch(requestFailed(error));
          });
  };
};

export const fetchStripInfo = (id) => {
  return dispatch => {
      axios.get( `/getAllStrips/${id}` )
          .then( response => {
             dispatch(receiveStripInfo(response.data));
          })
          .catch( error => {
              dispatch(receiveStripInfoFailed(error));
          });
  };
};

