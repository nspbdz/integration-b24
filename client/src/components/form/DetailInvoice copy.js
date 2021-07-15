import { useState,useContext } from "react";
import { Form, Button,Col,Row,ListGroup,Card } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import brand from "../../assets/images/brand.svg";

function DetailInvoice(props) {
  
  const { handleClose,handleOrder, show } = props;
  const router = useHistory();
  const tokens=localStorage.getItem("token");
  console.log(tokens);
  const contextValue = useContext(UserContext);
  const userId=contextValue[0].user.id;
  const pa =window.location.pathname
  
var GetPrice =localStorage.getItem("price")
console.log(GetPrice)
  

  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
   
    status:""
  });
  const handleChange = (event) => {
    const a=event.target.value
    console.log(formData)
    // setFormData(event.target.value)
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });

  }
  
var token= localStorage.getItem("token")
console.log(token);

  const MakeTransaction = () => {
    fetch('http://localhost:5000/api/v1/transaction', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`

      },
      body: JSON.stringify({
        status: "Waiting",
      }),
    })
      .then((res) => res.json() )
      .then((res) => {
       console.log(res)
       const stat=res.status
       if(stat=="success"){
        console.log("success")
        alert("kamu berhasil membuat transaksi")
        router.push(`/mybooking`);
       }
       console.log(res.status)
     }) 
      .then((result) => setData(result.rows))
      
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    MakeTransaction() 
  }

  return (
    <Modal style={{width:"1100px"}} show={show} onHide={handleClose}>
      <Modal.Body>
      <>
<Row className="justify-content-md-center" style={{paddingTop:"73px"}}>
<Col xs lg="2">
  
</Col>
<Col md="auto">
<Row>
<Card style={{ width: '1035px',height:"419px"  }}>
<ListGroup variant="flush">
  <ListGroup.Item>
  <Row>
  <Col sm={4}>
  <img src={brand} alt="brand" />

  </Col>
  <Col sm={5}>
    
  </Col>
  
  <Col sm={3}>
    <h4>Booking</h4>
    {/* <p>{Nowss} </p> */}
  </Col>
  </Row>

  {/* </ListGroup.Item> */}
  {/* <ListGroup.Item> */}
  

  
  <Row>
  <Col sm>
  {/* <h4>{item.house.name}</h4> */}
{/* <p>{item.house.address}</p> */}
<Button  variant="secondary">Waiting Payment</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>

    {/* <p>{item.checkin} </p> */}
    <br></br>
    <p>Check-Out</p>
    {/* <p>{item.checkout} </p> */}
    
    </Col>
  
  </Row>
  </Col>
  <Col sm>
      <h5>Amenities</h5>
    {/* <p>{item.house.amenities} </p> */}
    <h5>Type Of Rent</h5>
    {/* <p>{item.house.typeRent} </p> */}
    </Col>
  <Col sm>
    
    <img style={{width:"138px"}} src="" />
  <p>Upload Payment Proof</p>
  <Form >
    
        <Form.Group>
          <Form.Control
            name="imageFile"
            type="file"
            onChange={handleChange}
            required
          />
        </Form.Group>
      </Form>
        
  </Col>
</Row>
  
  <ListGroup>
  <Row>
  <Col sm="4">
  <Row>
  <Col sm="4">
   
  <h5>No</h5>
    
  </Col>
  <Col sm="4"><h5>Full Name</h5></Col>
  <Col sm="4"><h5>Gender</h5></Col>
</Row>
  </Col>
  <Col sm="4"><h5>Phone/Email</h5></Col>
  <Col sm="4">

  </Col>
</Row>
  </ListGroup>
  </ListGroup.Item>
  <ListGroup.Item>
  
  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  {/* <Col sm={4}>{dataUser.user.fullname} </Col> */}
  {/* <Col sm={4}>{dataUser.user.gender} </Col> */}
</Row>
 </Col>
 {/* <Col sm={4}>{dataUser.user.email} </Col> */}
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
  {/* <p>{compareYear +"Year "}
    {compareMonth +" Month "}
    {compareDay +" Day"} </p> */}

  </Col>
</Row>

  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  {/* <Col sm={2}>Rp. {item.house.price*AllCompared} </Col> */}
</Row>

  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>

  
  <Button onClick={handleSubmit} variant="primary" style={{width:"150px"}}>
    Pay
  </Button>

     </Col>
     <Col sm={2}>

  
  <Button onClick={handleSubmit} variant="primary" style={{width:"150px"}}>
    Pay
  </Button>

     </Col>
</Row>

  </ListGroup.Item>
  </ListGroup.Item>
</ListGroup>
</Card>
  <Col sm={4}></Col>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
</Row>
</Col>
<Col xs lg="2">
  
</Col>
</Row>
</>
   
  </Modal.Body>
    </Modal>
  );
}

export default DetailInvoice;
