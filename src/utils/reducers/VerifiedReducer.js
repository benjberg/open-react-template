export const verifiedFNReducer = (state = 0, action) => {
  switch (action.type) {
    case "NOTVERIFIED":
      return (state = 0);
    case "VERIFIED":
      return (state = 1);
    default:
      return state;
  }
};

export const verifiedWZReducer = (state = 0, action) => {
  switch (action.type) {
    case "NOTVERIFIED":
      return (state = 0);
    case "VERIFIED":
      return (state = 1);
    default:
      return state;
  }
};

export const verifiedVALReducer = (state = 0, action) => {
  switch (action.type) {
    case "NOTVERIFIED":
      return (state = 0);
    case "VERIFIED":
      return (state = 1);
    default:
      return state;
  }
};
