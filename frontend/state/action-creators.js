import axios from 'axios';

// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types';

//WHEEL ACTION CREATOR//
export function moveClockwise() { 
  return { type: types.MOVE_CLOCKWISE}
}

export function moveCounterClockwise() { 
  return { type: types.MOVE_COUNTERCLOCKWISE}
}

//QUIZ ACTION CREATOR//
export function setQuiz(quizData) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quizData }
 }


export function selectAnswer(selectedAnswer) { 
  return { type: types.SET_SELECTED_ANSWER, payload: selectedAnswer}  
}

//MESSAGE ACTION CREATOR//
export function setMessage(message) {
  return { type: types.SET_INFO_MESSAGE, payload: message }
 }


 //FORM ACTION CREATOR//
export function inputChange(newValue) {
  return {type: types.INPUT_CHANGE, payload: newValue }
 }

export function resetForm() {
  return {type: types.RESET_FORM }
 }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios
      .get('http://localhost:9000/api/quiz/next')
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch((error) => {
        console.error('Error fetching quiz', error)
      })
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    axios
      .post('http://localhost:9000/api/quiz/answer')
      .then((res) => {
        dispatch(selectAnswer());
        dispatch(setMessage(res.data.message));
        dispatch(fetchQuiz());
      })
      .catch((error) => {
        console.error('Error posting answer', error);
      })
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios
      .post('http://localhost:9000/api/quiz/new')
      .then((res) => {
       dispatch(setMessage('Quiz submitted successfully'));
       dispatch(resetForm());
      })
      .catch((error) => {
        console.error('Error posting quiz', error);
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
