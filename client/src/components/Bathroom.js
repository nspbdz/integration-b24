import { InputGroup,FormControl } from "react-bootstrap";
import {useState} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'

function Bathroom({ bathroom, setBathroom}) {
  

    const handleBathroom = useCallback(event => {
      setBathroom(event.target.value)
    }, [setBathroom])
  
        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of bathroom</p>

        <form >
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              1
              <input   
              style={{display:"none"}}
                value="1"
                checked={bathroom === "1"}
                // onChange={() => setBathroom(bathroom:"1")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              2
              <input   
              style={{display:"none"}}
                value="2"
                checked={bathroom === "2"}
                // onChange={() => setBathroom(bathroom:"2")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              3
              <input   
              style={{display:"none"}}
                value="3"
                checked={bathroom === "3"}
                // onChange={() => setBathroom(bathroom:"3")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              4
              <input   
              style={{display:"none"}}
                value="4"
                checked={bathroom === "4"}
                // onChange={() => setBathroom(bathroom:"4")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
            <label id="btnd" style={{border:"1px solid #CCC",width:"50px",margin:"15px" ,textAlign:"center"}}>
              5+
              <input   
              style={{display:"none"}}
                value="5"
                checked={bathroom === "5"}
                // onChange={() => setBathroom(bathroom:"5")}
                onChange={handleBathroom}
                type="radio"
              />
            </label>
        </form>
            </>

        )
    
}
  
  export default Bathroom;
