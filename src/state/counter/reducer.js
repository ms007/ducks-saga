import types from './types';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT: {
      const { count } = state;
      return { ...state, count: count + 1 };
    }

    case types.DECREMENT: {
      const { count } = state;
      return { ...state, count: count - 1 };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
