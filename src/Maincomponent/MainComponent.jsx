import React, { useEffect } from 'react'
import { useState } from 'react';
import { ChildComponent } from '../Childcomponent/ChildComponent';

import { useNavigate } from 'react-router-dom';

export const MainComponent = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState();
    const newdata = "The data is passing from main component to the child component";

    useEffect(()=>{
        console.log("showing data", Data);



    },[Data]);

    const ParentToChild =() =>{

        setData(newdata); 

        navigate('/child');

    }

  return (
    <div>
        {/* MainComponent */}
        {/* <div> Passing data from main component</div> */}
        <ChildComponent data="hamid" />

            
        

        <div>
            <button className='bg-red-400 ' onClick={ParentToChild}>
             Main Component
            </button>
        </div>
        

    </div>
  )
}
