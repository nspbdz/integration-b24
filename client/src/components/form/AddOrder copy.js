import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddOrder = (props) => { 
  const [data, setData] = useState({
    name: "",
    checkin: "",
    checkout: "",
    user_id:1,
    houseId:19,
    status:"pending"

  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:
      // [e.target.name]:e.target.value,
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data); 
    console.log(data.checkin); 
    
    try {
      const formData = new FormData();
      formData.set("name", data.name);
      formData.set("user_id", data.user_id);
      formData.set("checkin", data.checkin);
      formData.set("checkout", data.checkout);
      formData.set("houseId", data.houseId);
      formData.set("status", data.status);
      
      console.log(formData) 
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      await props.onOrder(formData, config);
      } catch (error) {
      console.log(error);
      }
      };
          
  
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            name="name"
            type="text"
            value={data.name}
            required
            placeholder="product name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label>Check In</Form.Label>
        <Form.Group controlId="checkin" id="datestyle">
        <Form.Label>Select Date</Form.Label>
          <Form.Control 
          name="checkin"

          //  value={data.checkin}
          //  required
           onChange={handleChange}
          type="date" placeholder="Date of Birth" />
      </Form.Group>
       
        <Form.Label>Check Out</Form.Label>
        <Form.Group controlId="checkout" id="datestyle">
        <Form.Label>Select Date</Form.Label>
          <Form.Control
          // value={data.checkout}
          // required
          onChange={handleChange}
           type="date" name="checkout" placeholder="Date of Birth" />
      </Form.Group>
       
     
      <Button  variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  );
};

export default AddOrder;
