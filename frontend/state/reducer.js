// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';

//WHEEL REDUCER//
const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case types.MOVE_CLOCKWISE:
     {
      const nextIndex = state + 1;
      return nextIndex > 5 ? 0 : nextIndex
    }
    case types.MOVE_COUNTERCLOCKWISE:
      {
        const lastIndex = state - 1;
        return lastIndex < 0 ? 5 : lastIndex
      }
      default:
        return state;
  }
}

//QUIZ REDUCER//
const initialQuizState = null //quizData? or []?
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE: 
      return action.payload;
    default:
    return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case types.SET_SELECTED_ANSWER:
        return action.payload
    default:
      return state;
  }
}

//MESSAGE REDUCER//
const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case types.SET_INFO_MESSAGE:
        return action.payload
      default:
        return state;
  }
}

//FORM REDUCER//
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case types.RESET_FORM:
      return initialFormState
    case types.INPUT_CHANGE:
      return { ...state,
        [action.payload.inputId] : action.payload.value 
      }
    default: 
    return state;

  }
  
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
