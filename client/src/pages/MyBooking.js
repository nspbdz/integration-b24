import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import data from "../data/fakeData";
import NotFound from "./NotFound";
import CardList from "../components/CardList";
import { FaBath,FaBed } from 'react-icons/fa';
import brand from "../assets/images/brand.svg";


import { ListGroup,Card,Jumbotron,Row,Col,Button,Container } from "react-bootstrap";


const DetailProperty = ({ match }) => {
    
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
const pa =window.location.pathname
const splitval=pa.split("/MyBooking/")
const urlVal=splitval[1]
console.log(urlVal)

const Nowss =new Date().toLocaleTimeString("en-US", { month: "long",day: "2-digit" })
console.log(Nowss)
//   window.location.href


  return(
    <div>
    {data.filter(item => item.id ==urlVal).map(dataMatch => (
      
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
                            <p>{Nowss} </p>
                          </Col>
                          </Row>

                          </ListGroup.Item>
                          <ListGroup.Item>
                          <Row>
                          <Col sm>
                          <h4>{dataMatch.name}</h4>
                        <p>{dataMatch.address}</p>
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

            

        
      
    ))}
  </div>
  )
}
export default DetailProperty;
