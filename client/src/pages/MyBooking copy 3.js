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
  const userId=contextValue[0].user.id;
console.log(userId)
var lengt;
  // const getProduct = async () => {
  //   const response = await API.get(`/transaction?user_id=${userId}`);
  //   console.log(response);
  //   console.log(response.data.data.length);
  //   setDataLength(response.data.data.length)
  //   // (response.data.data);
  //   setData(response.data.data);
  //   setLoading(false);  
  // };
  // useEffect(() => {
  //   getProduct();
  //   return () => {
  //     setData(null);
  //   };
  // }, []);

  const { isLoading, data, error } = useQuery("products", async () => {
  // /  const response = await API.get("/products");
    const response = await API.get(`/transaction?user_id=${userId}`);
  
    return response.data.data;
  });

  const datale=dataLength
  console.log(datale)
var lastdata=data.length-1
console.log(data)
console.log(data[lastdata])
const item=data[lastdata]
console.log(data.length)
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
                          1 of 3
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
                          <Col sm={4}>
                            
                          </Col>
                          <Col sm={4}>
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
                            <Col sm>sm=true</Col>
                            <Col sm>sm=true</Col>
                            <Col sm>
                              <h4>Amenities</h4>
                              
                            </Col>
                          </Row>
                          </Col>
                          <Col sm>
                            
                          </Col>
                        </Row>
                          
                          </ListGroup.Item>
                          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                      </Card>
                          <Col sm={4}>

                          </Col>
                          <Col sm={4}>
                            
                          </Col>
                          <Col sm={4}>
                            
                          </Col>
                        </Row>
                        
                        </Col>
                        <Col xs lg="2">
                          3 of 3
                        </Col>
                      </Row>


    
</>

            

        
      
    {/* ))} */}
  </div>
  )
}
export default DetailProperty;
