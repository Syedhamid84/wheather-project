import React from 'react';

// import ParentToChild from "../Maincomponent/MainComponent";

export const ChildComponent = ( props ) => {
  return (
    <div>ChildComponent
        {/* <div>
            Recieving data from main component
        </div> */}
        <div>

       <h1> {props.name} </h1>
        </div>
    </div>
  )
}
