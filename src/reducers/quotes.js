const initialState = {
  loading: false,
  error: false,
  quotes: [],
}

const quotes = (state={}, action) => {
  switch (action.type) {
    case 'QUOTES_LOADING':
      return Object.assign(state, { loading: action.loading });
    case 'QUOTE_ERROR':
      return Object.assign(state, { error: action.error });
    case 'QUOTE':
      return Object.assign(state, { quotes: action.data });;
    default:
      return state;
  }
}

export default quotes;
