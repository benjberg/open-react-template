const gamesReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXTGAME":
      return state + 1;
    case "PREVGAME":
      return state - 1;
    default:
      return state;
  }
};
export default gamesReducer;
