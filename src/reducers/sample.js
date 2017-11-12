const sample = (state={}, action) => {
  switch (action.type) {
    case 'QUOTES_LOADING':
      return action;
    case 'QUOTE_ERROR':
      return action;
    case 'QUOTE':
      return action;
    default:
      return state;
  }
}

export default sample;
