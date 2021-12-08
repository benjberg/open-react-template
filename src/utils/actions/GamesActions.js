export const nextgame = (name) => {
  return {
    type: "NEXTGAME",
    name: name,
  };
};

export const prevgame = (name) => {
  return {
    type: "PREVGAME",
    name: name,
  };
};
