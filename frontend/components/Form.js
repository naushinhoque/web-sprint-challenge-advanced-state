import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const { newQuestion, newTrueAnswer, newFalseAnswer } = formData;

  const onChange = evt => {
    const { id, value } = evt.target;
    console.log(id, value);
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const onSubmit = evt => {
    evt.preventDefault();
    console.log(formData);
    props.postQuiz(formData);

    setFormData({
      newQuestion: '',
      newTrueAnswer: '',
      newFalseAnswer: ''
    });
  };

  const isDisabled = () => {
    return Object.values(formData).some(value => !value.trim().length)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input value={formData.newQuestion} maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input value={formData.newTrueAnswer} maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input value={formData.newFalseAnswer} maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" type="submit" disabled={isDisabled()}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
