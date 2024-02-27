import React from 'react';

export const ChildComponent = (props) => {
  return (
    <div>

      <div>

        <p>{props.name}</p>
        <p>{props.fullname} </p>
        <p>{props.age} </p>
        <h1>this is child component</h1>



      </div>
    </div>
  )
}
