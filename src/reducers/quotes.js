const initialState = {
  loading: false,
  error: false,
  data: [],
}

const quotes = (state=initialState, action) => {
  switch (action.type) {
    case 'QUOTES_LOADING':
      return Object.assign({}, state, { loading: action.loading });
    case 'QUOTE_ERROR':
      return Object.assign({}, state, { error: action.error });
    case 'QUOTE':
      const data = [...action.data, ...state.data];
      return Object.assign({}, state, { data: data });;
    default:
      return state;
  }
}

export default quotes;
