// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';

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

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case types.SET_QUIZ_INTO_STATE: 
    {
      return action.payload;
    }
    default:
    return state;
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
