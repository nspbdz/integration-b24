import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import { Row,Button, Col } from "react-bootstrap";
import AddPropertyForm from "../components/form/AddPropertyForm";
import HouseId from "../components/HouseId"
function AddProperty(props) {
  
  const [showSignin, setshowSignin] = useState(false);
 
  return (
    <div>
    <Row>
    <Col>
    <HouseId />
    <Row>
                    
                      <Col >
                        <>
                      <AddPropertyForm />

                      <Button  onClick={() => setshowSignin(true)} className="justic=fy" variant="primary" type="submit">
                          Book Now
                      </Button>
                      {/* </Button> */}
                      </>
                        </Col>

                        </Row> 

    
    </Col>
    {/* <Col>
    <Button  onClick={() => setshowSignin(true)} className="justic=fy" variant="primary" type="submit">
            Apply
        </Button>
        <AddOrder 
        show={showSignin}
        handleClose={() => setshowSignin(false)}
        />
    </Col> */}
  </Row>
</div>
  );
}

export default AddProperty;
