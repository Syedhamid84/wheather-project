import React, { useEffect } from 'react'
import { useState } from 'react';
import { ChildComponent } from '../Childcomponent/ChildComponent';

import { useNavigate } from 'react-router-dom';

export const MainComponent = () => {
    const navigate = useNavigate();
    const [Data, setData] = useState();
    const newdata = "The data is passing from main component to the child component";


    const ParentToChild = () => {

        setData(newdata);

        navigate('/child');

    }

    return (
        <div>

            <p>the below data is come child props component</p>
            <ChildComponent name="hamid" fullname="syed hamid ali" age="36" />







            <div>
                <button className='bg-red-400 ' onClick={ParentToChild}>
                    Main Component
                </button>
            </div>


        </div>
    )
}
