import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {
  const { formData, inputChange, postQuiz } = props;

  const onChange = evt => {
    const { id, value } = evt.target;
    inputChange(id, value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(formData);

    // No need to reset the form data here; Redux will manage it.
  };

  const isDisabled = () => {
    const { newQuestion, newTrueAnswer, newFalseAnswer } = formData;
    return ![newQuestion, newTrueAnswer, newFalseAnswer].every(value => value.trim().length >= 2);
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        value={formData.newQuestion}
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        value={formData.newTrueAnswer}
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        value={formData.newFalseAnswer}
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn" type="submit" disabled={isDisabled()}>
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    formData: state.form,
  };
};

export default connect(mapStateToProps, actionCreators)(Form);
