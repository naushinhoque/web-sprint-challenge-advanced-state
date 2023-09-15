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


export function selectAnswer(answer_id) { 
  return { type: types.SET_SELECTED_ANSWER, payload: answer_id}  
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
    dispatch(setQuiz(null))
    axios
      .get('http://localhost:9000/api/quiz/next')
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))
      })
  }
}
export function postAnswer({ quiz_id, answer_id}) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
      .then((res) => {
        dispatch(selectAnswer(null))
        dispatch(setMessage(res.data.message))
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))
      })
      .finally(() => {
        dispatch(fetchQuiz())
      })
  }
}
export function postQuiz({ newQuestion, newTrue, newFalse }) {
  return function (dispatch) {
    axios
      .post('http://localhost:9000/api/quiz/new', { newQuestion, newTrue, newFalse })
      .then((res) => {
       dispatch(setMessage(res.data.message));
       dispatch(resetForm());
      })
      .catch(err => {
        const errToDisplay = err.response ? err.response.data.message : err.message
        dispatch(setMessage(errToDisplay))
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
