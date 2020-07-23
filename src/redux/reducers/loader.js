import * as types from '../types';
import INITIAL_STATE from '../INITIAL_STATE';

const error = (state = INITIAL_STATE.loader, { type }) => {
  switch (type) {
    // case types.GET_TRANSACTIONS_STARTED:
    // case types.POST_BALANCE_STARTED:
    // case types.POST_COSTS_STARTED:
    // case types.GET_COSTS_STARTED:
    // case types.POST_INCOME_STARTED:
    case types.LOGIN_USER_REQUEST:
    case types.SIGNUP_USER_REQUEST:
      return true;
    case types.GET_TRANSACTIONS_FAILURE:
    case types.POST_BALANCE_FAILURE:
    case types.GET_TRANSACTIONS_SUCCESS:
    case types.POST_BALANCE_SUCCESS:
    case types.POST_COSTS_SUCCESS:
    case types.POST_COSTS_FAILURE:
    case types.GET_COSTS_SUCCESS:
    case types.GET_COSTS_ERROR:
    case types.POST_INCOME_FAILURE:
    case types.LOGIN_USER_SUCCESS:
    case types.SIGNUP_USER_SUCCESS:
    case types.LOGIN_USER_ERROR:
    case types.SIGNUP_USER_ERROR:
      return false;
    default:
      return state;
  }
};

export default error;
