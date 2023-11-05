import React from "react";
import './App.css'
import { useState } from "react";


const App = () => {
    const [rate1,setrate1]=useState(0);
    const [rate2,setrate2]=useState(0);
    const [value,setvalue]=useState(0);
    const handlerate = (star)=>{
        setrate1(star);
    };
    const handlehalf = (e,star)=>{
        setvalue(parseInt(e.target.clientX))
        setrate2(star);
    };
    return(
        <>
        <h2>RATING WITH FULL STARS</h2>
        {
            [1,2,3,4,5].map((star)=>
                <span
                    key={star}
                    className={
                        rate1>=star
                        ?"star filled"
                        :"star"
                    }
                    onClick={()=>{handlerate(star)}}
                
                >&#9733;</span>
            )
        }
        <h2>RATING WITH HALF STARS</h2>
        {
            [1,2,3,4,5].map((star)=>
                <span
                    key={star}
                    className={
                        rate2>star? "star filled":(rate2===star?(value<=100?"star half":"star filled"):"star")
                    }
                    onClick={()=>{handlehalf(star)}}
                >
                    &#9733;
                </span>
            )
        }
        </>
    )
}
export default App;