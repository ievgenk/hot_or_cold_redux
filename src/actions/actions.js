export const RESTART_GAME = "RESTART_GAME";
export const MAKE_A_GUESS = "MAKE_A_GUESS";
export const AURAL_UPDATE = "AURAL_UPDATE";

export const generateAuralUpdate = () => {
  return {
    type: AURAL_UPDATE
  };
};

export const makeAGuess = guess => {
  return {
    type: MAKE_A_GUESS,
    guess
  };
};

export const restartGame = () => {
  return {
    type: RESTART_GAME
  };
};
