import { InputGroup,FormControl,Row,Col,Form } from "react-bootstrap";
// import React from 'react';
import React, { useCallback } from 'react'


function Amenities({ amenities, setAmenities}) {
  

    const handleAmenities = useCallback(event => {
        setAmenities(event.target.value)
    }, [setAmenities])
  

        return (
            <>
    
        <p className="h3 text-left font-weight-bold">Amenities</p> 
         <Row>
            <Col sm><p className=""> Furnished</p></Col>
            {/* <Col sm></Col> */}
            <Col sm>
           <input   
            //   style={{display:"none"}}
                value="Furnished"
                checked={amenities === "Furnished"}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className=""> Pet Allowed</p></Col>
            <Col sm>   
           <input   
            //   style={{display:"none"}}
                value="Pet Allowed"
                checked={amenities === "Pet Allowed"}
                // onChange={() => setRent(rent:"Pet Allowed")}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

        <Row>
            <Col sm><p className="">Shared Accomodation</p></Col>
            <Col sm>   
           <input   
            //   style={{display:"none"}}
                value="Shared Acomodities"
                checked={amenities === "Shared Acomodities"}
                // onChange={() => setRent(rent:"Share Acomodities")}
                onChange={handleAmenities}
                type="checkbox"
              />
            </Col>
        </Row>

            </>

        )
}
  
  export default Amenities;
