import React from "react";

import Header from "./header";
import GuessSection from "./guess-section";
import StatusSection from "./status-section";
import InfoSection from "./info-section";
import { connect } from "react-redux";
import {
  restartGame,
  makeAGuess,
  generateAuralUpdate
} from "../actions/actions";

class Game extends React.Component {
  restartGame() {
    this.props.dispatch(restartGame());
  }

  componentDidUpdate() {
    document.title = this.props.feedback
      ? `${this.props.feedback} | Hot or Cold`
      : "Hot or Cold";
  }

  makeGuess(guess) {
    const actionGuess = makeAGuess(guess);
    console.log(actionGuess);
    this.props.dispatch({ type: "MAKE_A_GUESS", guess });
  }

  generateAuralUpdate() {
    this.props.dispatch(generateAuralUpdate());
  }

  render() {
    const { feedback, guesses, auralStatus } = this.props;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} auralStatus={auralStatus} />
          <InfoSection />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses,
  auralStatus: state.auralStatus,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);
