const gamesReducer = (state = [0, "FN"], action) => {
  switch (action.type) {
    case "NEXTGAME":
      if (state[0] < 3) {
        return (state = [state[0] + 1, (state[1] = action.name)]);
      } else {
        return [(state[0] = 0), (state[1] = "FN")];
      }
    case "PREVGAME":
      return (state = [state[0] - 1, (state[1] = action.name)]);
    default:
      return state;
  }
};

export default gamesReducer;
