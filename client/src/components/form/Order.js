import { useState } from "react";
import { useMutation } from "react-query";
import { Form, Button } from "react-bootstrap";
import { API, setAuthToken } from "../../config/api";

const Order = ({ handleOrder }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = useMutation(
    async () => {
      const config = {
        "Content-Type": "application/json",
      };
      return await API.post("/login", data, config);
    },
    {
      onSuccess: async ({ data }) => {
        console.log(data)
        // console.log(data.data.token)
        setAuthToken(data.data.token);
        handleOrder({
          type: "LOGIN",
          payload: data.data,

        });
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser.mutate();
  };
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Label>Check In</Form.Label>
        <Form.Group controlId="dob" id="datestyle">
        <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
       
        <Form.Label>Check Out</Form.Label>
        <Form.Group controlId="dob" id="datestyle">
        <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
       
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Order;
