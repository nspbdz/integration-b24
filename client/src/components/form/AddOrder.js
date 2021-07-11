import { useState,useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory,Router,Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function AddOrder(props) {
  
  const { handleClose,handleOrder, show } = props;
  const router = useHistory();
  const tokens=localStorage.getItem("token");
  console.log(tokens);
  const contextValue = useContext(UserContext);
  const userId=contextValue[0].user.id;
  const pa =window.location.pathname
  const splitval=pa.split("/house/")
  const urlVal=splitval[1]
  console.log(urlVal)
  
  const [data, setData] = useState([])
  const [formData, setFormData] = useState({
      // name: "",
    checkin:2000-10-10,
    checkout: "",
    user_id:'',
    houseId:'',
    // status:"pending"
    // checkin: "",
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
  const aa=String(formData.checkin)
  console.log(formData.checkin)

  const saveGames = () => {
    fetch('http://localhost:5000/api/v1/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // name: formData.name,
        checkin: formData.checkin,
        checkout: formData.checkout,
        user_id: userId,
        houseId: urlVal,
        status: "pending",
     
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
      // .then({
      //   props.onAddOrder(formData);
      // })
      .catch((err) => console.log('error'))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    saveGames() // Save games when form is submitted
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
    <form onSubmit={handleSubmit}>

    <br></br>
  
    <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
    <br></br>
  
    <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
    <br></br>
    
    <button type="submit">click</button>
  </form>
  </Modal.Body>
    </Modal>
  );
}

export default AddOrder;
