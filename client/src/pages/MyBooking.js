import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';
import brand from "../assets/images/brand.svg";
import { API } from "../config/api";
import { ListGroup,Card,Jumbotron,Row,Col,Button,Container } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";
import { useQuery } from "react-query";

const DetailProperty = () => {
  // const [data, setData] = useState(null);
  const [dataLength, setDataLength] = useState(null);
  const [loading, setLoading] = useState(true);
  const contextValue = useContext(UserContext);
console.log(contextValue[0])

  const userId=contextValue[0].user.id;
  const dataUser=contextValue[0];
console.log(userId)
var lengt;
  

  const { isLoading, data, error } = useQuery("products", async () => {
  // /  const response = await API.get("/products");
    const response = await API.get(`/transaction?user_id=${userId}`);
  
    return response.data.data;
  });
  if (isLoading) return <p>...loading</p>;


  const datale=dataLength
  console.log(datale)

console.log(data[0])
console.log(data.length)
var lastdata=data.length-1
console.log(data)
console.log(data[lastdata])
const item=data[lastdata]
// console.log(data.length)
// var i=0;
// for(i=0; i<dataLength; i++ ){
//   console.log(i)
// }

console.log(data)
// const a=data.map(item => {
// console.log(item)
// })

// console.log(data.transactions)
  // if (loading) return <p>loading...</p>;



// const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
// console.log(Nowss)
//   window.location.href


  return(
    <div>
    {/* {data.filter(item => item.id ==urlVal).map(dataMatch => ( */}
      
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
  <Col sm={3}>
    
  </Col>
  <Col sm={5}>
    <h4>Booking</h4>
    {/* <p>{Nowss} </p> */}
  </Col>
  </Row>

  </ListGroup.Item>
  <ListGroup.Item>
  <Row>
  <Col sm>
  <h4>{item.house.name}</h4>
<p>{item.house.address}</p>
<Button variant="secondary">Waiting Payment</Button>
  </Col>
  <Col sm>
  <Row>
    <Col sm>status</Col>
    <Col sm>
      <p>Check-In</p>

    <p>{item.checkin} </p>
    <br></br>
    <p>Check-Out</p>
    <p>{item.checkout} </p>
    
    </Col>
  
  </Row>
  </Col>
  <Col sm>
      <h5>Amenities</h5>
    <p>{item.house.amenities} </p>
    <h5>Type Of Rent</h5>
    <p>{item.house.typeRent} </p>
    </Col>
  <Col sm>
    <img style={{width:"138px"}} src="https://i1.wp.com/investasisyariah.info/wp-content/uploads/2018/02/Struk-Pembelian.jpg?resize=450%2C450&ssl=1" />
  <p>Upload Payment Proof</p>
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
  {/* <Row>
  <Col sm={4}> */}

      {/* {userData.filter(item => item.username ==userval).map((items,index) => {
  console.log(userData)
  return(
    <> */}

  <Row>
  <Col sm={4}>
  <Row>
  <Col sm={4}>1 </Col>
  <Col sm={4}>{dataUser.user.fullname} </Col>
  <Col sm={4}>{dataUser.user.gender} </Col>
</Row>
 </Col>
 <Col sm={4}>{dataUser.user.email} </Col>
  <Col sm={2}>
  <p>Long Time Rent :</p>
  </Col>
  <Col sm={2}>
  <p>1 Year </p>
  </Col>
</Row>
{/* </> */}

{/* )
})} */}

  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={2}>Total : </Col>
  <Col sm={2}>Rp. {item.house.price} </Col>
</Row>

  </ListGroup.Item>
  <ListGroup.Item>
    <Row>
  <Col sm={4}> </Col>
  <Col sm={4}> </Col>
  <Col sm={4}>

  {/* <Link to={{

    pathname: `/MyBookingPending/${userval}/${bookval}/${bookval}`
  }} > */}
  <Button variant="primary" style={{width:"150px"}}>

    Pay
  </Button>
  {/* </Link> */}
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
   

        
      
    {/* ))} */}
  </div>
  )
}
export default DetailProperty;
