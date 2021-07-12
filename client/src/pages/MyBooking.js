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
  

  const { isLoading, data, error } = useQuery("products", async () => {
  // /  const response = await API.get("/products");
    const response = await API.get(`/transaction?user_id=${userId}`);
  
    return response.data.data;
  });
  if (isLoading) return <p>...loading</p>;



console.log(data[0])
console.log(data.length)
var lastdata=data.length-1
console.log(data)
console.log(data[lastdata])
const item=data[lastdata]
console.log(data)

  // if (loading) return <p>loading...</p>;



console.log(item.checkin)
var d1 = new Date(item.checkin);
var d2 = new Date(item.checkout);
const checkinYear=d1.getUTCFullYear()
const checkinMonth=d1.getUTCMonth()
const checkinDay=d1.getUTCDay()

const checkoutYear=d2.getUTCFullYear()
const checkoutMonth=d2.getUTCMonth()
const checkoutDay=d2.getUTCDay()

// console.log(checkinYear);
// console.log(checkinMonth);
// console.log(checkinDay);

// console.log(checkoutYear);
// console.log(checkoutMonth);
// console.log(checkoutDay);

const compareYear=checkoutYear-checkinYear
const compareMonth=checkoutMonth-checkinMonth
const compareDay=checkoutDay-checkinDay
var AllCompared=0;

if(compareDay ==0){
  var AllCompared=AllCompared
}
else if(compareDay >0){
  console.log("day")
  console.log(compareDay)
  // var AllCompared=compMonth+compareDay
  var AllCompared=AllCompared+compareDay
  
  if(compareMonth >0){
    var compMonth=compareMonth*30
    console.log(compMonth)
    var AllCompared=compMonth+compareDay

  }
  if(compareYear >0){
    var compYear=compareYear*365
    var AllCompared=compYear+compareDay
    console.log(AllCompared)
  }
}

// data untuk type rent
// <p>{compareYear +"Year "}
//     {compareMonth +" Month "}
//     {compareDay +" Day"} </p>


console.log(compareYear);
console.log(compareMonth);
console.log(compareDay);

console.log(AllCompared);
var rent=''


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
  <p>{compareYear +"Year "}
    {compareMonth +" Month "}
    {compareDay +" Day"} </p>

  {/* <p>{compYear +"year",compareDay +"Day"} </p> */}
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
  <Col sm={2}>Rp. {item.house.price*AllCompared} </Col>
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
