import { React, useState} from 'react'

export default function Wheel(props) {

  const [rotationAngle, setRotationAngle] = useState(0);

  const rotateClockwise = () => {
    setRotationAngle( rotationAngle + 60 );
  };

  const rotateCounterClockwise = () => {
    setRotationAngle( rotationAngle - 60 );
  };

  return (
    <div id="wrapper">
      <div id="wheel" style={{ transform: `rotate(${rotationAngle}deg)`}}>
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={rotateClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={rotateCounterClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
