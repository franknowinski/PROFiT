import Immutable from 'immutable';

import actionTypes from '../constants/stockConstants';

export const $$initialState = Immutable.fromJS({
  stockTicker: ''
});

export default function stocksReducer($$state = $$initialState, action) {
  const { type, stockTicker } = action;

  switch (type) {
    case actionTypes.UPDATE_STOCK_TICKER:
      return $$state.set('stockTicker', stockTicker);
    default:
      return $$state;
  }
}

