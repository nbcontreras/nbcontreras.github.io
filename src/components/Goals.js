import React from 'react';
import LineIcon from 'react-lineicons';

function Goals(props) {
  return (
    <div className="mi-goal">
      <span className="mi-goal-icon">
        <LineIcon name={props.content.icon} />
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  );
}

export default Goals;
