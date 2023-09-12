import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export default function Wheel(props) {

  const dispatch = useDispatch();
  const wheelState = useSelector(state => state.wheel);

  const moveClockwiseClick = () => {
    dispatch(actionCreators.moveClockwise())
  };

  const moveCounterClockwiseClick = () => {
    dispatch(actionCreators.moveCounterClockwise())
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog${0 === wheelState ? ' active' : ''}`} style={{ "--i": 0 }}>
          {0 === wheelState ? 'B' : null}
        </div>
        <div className={`cog${1 === wheelState ? ' active' : ''}`} style={{ "--i": 1 }}>
          {1 === wheelState ? 'B' : null}
        </div>
        <div className={`cog${2 === wheelState ? ' active' : ''}`} style={{ "--i": 2 }}>
          {2 === wheelState ? 'B' : null}
        </div>
        <div className={`cog${3 === wheelState ? ' active' : ''}`} style={{ "--i": 3 }}>
          {3 === wheelState ? 'B' : null}
        </div>
        <div className={`cog${4 === wheelState ? ' active' : ''}`} style={{ "--i": 4 }}>
          {4 === wheelState ? 'B' : null}
        </div>
        <div className={`cog${5 === wheelState ? ' active' : ''}`} style={{ "--i": 5 }}>
          {5 === wheelState ? 'B' : null}
        </div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwiseClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}



