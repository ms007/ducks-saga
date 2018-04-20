import types from './types';

const initialState = {
  hero: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_HERO: {
      return { ...state, hero: action.payload };
    }

    case types.LOADING_HERO: {
      return { ...state, loading: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
