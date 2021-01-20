import * as actionTypes from '../actions/actionTypes';

const initialState = {
  strips: [],
  stripInfo: {},
  err: null,
}

const stripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVE_STRIPS:
      return {
        ...state,
        strips: action.strips.data,
      }
    case actionTypes.RECEIVE_STRIP_INFO:
      return {
        ...state,
        stripInfo: action.info.data,
      }
    case actionTypes.REQUEST_STRIPS_FAILED:
      return {
        ...state,
        err: action.err,
      }
    default:
      return state;
  }
}

export default stripsReducer;