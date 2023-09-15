import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

const Quiz = (props) => {
  useEffect(() => {
    // props.postAnswer(); after I submity the answer and needs to return object 
    // props.postQuiz();
    !quizData && props.fetchQuiz()
  }, []);


  const { quizData, selectedAnswer, message } = props;
  console.log(quizData);

  

  return (
    <div id="wrapper">
      {/* Display quiz questions and answers */}
      {quizData ? (
        <div>
          <h2>{quizData.question}</h2>
          <div id="quizAnswers">
              <div className={`answer${selectedAnswer === quizData.answers[0].answer_id ? ' selected' : ''}`} onClick={() => props.selectAnswer(quizData.answers[0].answer_id)}>
                {quizData.answers[0].text}
                <button>
                  {selectedAnswer === quizData.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer${selectedAnswer === quizData.answers[1].answer_id ? ' selected' : ''}`} onClick={() => props.selectAnswer(quizData.answers[1].answer_id)}>
                {quizData.answers[1].text}
                <button>
                  {selectedAnswer === quizData.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
            </div>
        </div>
        <button id="submitAnswerBtn" disabled={!selectedAnswer} onClick={() => props.postAnswer({ quiz_id: quizData.quiz_id, answer_id: selectedAnswer })}>Submit answer</button>
      </div>
      ): 'Loading next quiz...'}
      
    </div>
  )
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