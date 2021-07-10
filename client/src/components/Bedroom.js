import { InputGroup,FormControl } from "react-bootstrap";
import {useState} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'

function Bedroom({ bedroom, setBedroom}) {
  

    const handleDuratuionChange = useCallback(event => {
      setBedroom(event.target.value)
    }, [setBedroom])
  
        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of bedroom</p>

        <form >
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              1
              <input   
              style={{display:"none"}}
                value="1"
                checked={bedroom === 1}
                // onChange={() => setBedroom(bedroom:"1")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              2
              <input   
              style={{display:"none"}}
                value="2"
                checked={bedroom === 2}
                // onChange={() => setBedroom(bedroom:"2")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              3
              <input   
              style={{display:"none"}}
                value="3"
                checked={bedroom === 3}
                // onChange={() => setBedroom(bedroom:"3")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              4
              <input   
              style={{display:"none"}}
                value="4"
                checked={bedroom === 4}
                // onChange={() => setBedroom(bedroom:"4")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              5+
              <input   
              style={{display:"none"}}
                value="5"
                checked={bedroom === 5}
                // onChange={() => setBedroom(bedroom:"5")}
                onChange={handleDuratuionChange}
                type="radio"
              />
            </label>
        </form>
            </>

        )
    
}
  
  export default Bedroom;
