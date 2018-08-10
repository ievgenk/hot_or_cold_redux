import { RESTART_GAME, MAKE_A_GUESS, AURAL_UPDATE } from "../actions/actions";

const initState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: "",
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case AURAL_UPDATE: {
      const { guesses, feedback } = this.props;

      const pluralize = guesses.length !== 1;

      let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${
        guesses.length
      } ${pluralize ? "guesses" : "guess"}.`;

      if (guesses.length > 0) {
        auralStatus += ` ${
          pluralize ? "In order of most- to least-recent, they are" : "It was"
        }: ${guesses.reverse().join(", ")}`;
      }

      return {
        ...state,
        auralStatus
      };
    }
    case MAKE_A_GUESS: {
      let { guess } = action;
      guess = parseInt(guess, 10);
      if (isNaN(guess)) {
        return {
          ...state,
          feedback: "Please enter a valid number"
        };
      }

      const difference = Math.abs(guess - state.correctAnswer);

      let feedback;
      if (difference >= 50) {
        feedback = "You're Ice Cold...";
      } else if (difference >= 30) {
        feedback = "You're Cold...";
      } else if (difference >= 10) {
        feedback = "You're Warm.";
      } else if (difference >= 1) {
        feedback = "You're Hot!";
      } else {
        feedback = "You got it!";
      }

      return {
        ...state,
        feedback,
        guesses: [...state.guesses, guess]
      };
    }
    case RESTART_GAME:
      return {
        ...initState
      };
    default:
      return state;
  }
};
