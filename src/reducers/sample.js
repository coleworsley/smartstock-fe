const sample = (state={}, action) => {
  switch (action.type) {
    case 'SAMPLE':
      return action;
    default:
      return state;
  }
}

export default sample;
