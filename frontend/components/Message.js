import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {

  const { serverMessage } = props;

  return <div id="message">{serverMessage}</div>;
}

const mapStateToProps = (state) => {
  return {
    serverMessage: state.infoMessage
  };
};

export default connect(mapStateToProps)(Message);