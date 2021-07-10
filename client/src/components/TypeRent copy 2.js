import { InputGroup,FormControl } from "react-bootstrap";
import {useState} from 'react';
import "../styles/customBtn.css";
import React, { useCallback } from 'react'

function TypeRent({ rent, setRent}) {
  
  const handleChange = (e) => {

    const newData = e.target.value;
    console.log(newData)
    var elems = document.querySelectorAll(".toggleButtonNew.active");
    [].forEach.call(elems, function (el) {
      console.log(elems)
      el.classList.remove("active");
    });
    e.target.closest("label").classList.toggle("active");
    // setRadioValue(newData);
};

    const handleDuratuionChange = useCallback(event => {
      setRent(event.target.value)
    }, [setRent])
  
        const rents = ["day", "month", "year"];

        return (
            <>
        <p className="h3 text-left font-weight-bold">Type Of Rent</p>

        <form >
        {rents.map((rento, index) => (
            <label key={index} style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              {rento}
              <input   
              style={{display:"none"}}
                value={rento}
                checked={rent === rento}
                onChange={handleChange}
                type="radio"
              />
            </label>
          ))}
        </form>
            {/* <label style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              Day
              <input   
              style={{display:"none"}}
                value="day"
                checked={rent === "day"}
                // onChange={() => setRent(rent:"day")}
                onChange={handleChange}
                type="radio"
              />
            </label>

            <label style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              Month
              <input   
              style={{display:"none"}}
                value="month"
                checked={rent === "month"}
                // onChange={() => setRent(rent:"month")}
                onChange={handleChange}
                type="radio"
              />
            </label>
            <label style={{border:"1px solid #CCC",width:"50px",margin:"15px"}}>
              Year
              <input   
              style={{display:"none"}}
                value="year"
                checked={rent === "year"}
                // onChange={() => setRent(rent:"year")}
                onChange={handleChange}
                type="radio"
              />
            </label>
        </form> */}
            </>

        )
    
}
  
  export default TypeRent;
