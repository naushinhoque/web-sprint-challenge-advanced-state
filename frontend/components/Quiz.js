import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

const Quiz = (props) => {
  useEffect(() => {
    props.fetchQuiz();
    props.postAnswer();
    props.postQuiz();
  }, []);

  const { quizData, selectedAnswer, message } = props;

  return (
    <div id="wrapper">
      {/* Display quiz questions and answers */}
      {quizData && (
        <div>
          <h2>{quizData.question}</h2>
          <ul>
            {quizData.answers.map((answer, index) => (
              <li key={index}>{answer}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display selected answer */}
      {selectedAnswer && <p>Selected Answer: {selectedAnswer}</p>}

      {/* Display server message */}
      {message && <p>Server Message: {message}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quizData: state.quiz,
    selectedAnswer: state.selectedAnswer,
    message: state.serverMessage,
  };
};

const ConnectedQuiz = connect(mapStateToProps, actionCreators)(Quiz);

export default ConnectedQuiz;


{/* 
        // // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        // true ? (
        //   <>
        //     <h2>What is a closure?</h2>

        //     <div id="quizAnswers">
        //       <div className="answer selected">
        //         A function
        //         <button>
        //           SELECTED
        //         </button>
        //       </div>

        //       <div className="answer">
        //         An elephant
        //         <button>
        //           Select
        //         </button>
        //       </div>
        //     </div>

        //     <button id="submitAnswerBtn">Submit answer</button>
        //   </>
            // ) : 'Loading next quiz...' */}