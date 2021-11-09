import React from 'react';
import LineIcon from 'react-lineicons';

function Progress(props) {
  const winWidth = window.innerWidth;
  const lineIconSytle = {
    color: '#55e62d',
    'font-weight': 'bold',
  };
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <span
          className="mi-progress-active"
          style={
            props.isVisible ? { width: `${props.percentage}%` } : { width: 0 }
          }
        ></span>
      );
    }
    return (
      <span
        className="mi-progress-active"
        style={{ width: `${props.percentage}%` }}
      ></span>
    );
  };
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">
        <LineIcon name={props.icon} style={lineIconSytle} /> {props.title}
      </h6>
      <div className="mi-progress-inner">
        {/* <div className="mi-progress-percentage">{`${props.percentage}%`}</div> */}
        {/* <div className="mi-progress-container">{progressQuery()}</div> */}
      </div>
    </div>
  );
}

export default Progress;
