const teamsReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXTTEAM":
      return state + 1;
    case "PREVTEAM":
      return state - 1;
    default:
      return state;
  }
};

export default teamsReducer;
