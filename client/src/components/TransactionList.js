
import { Col, Row,Table } from "react-bootstrap";
import { useState } from "react";
import TransactionItem from "./TransactionItem";

import { BsSearch } from "react-icons/bs";
import not_found from "../assets/images/not_found.svg";
import DetailInvoice from "./form/DetailInvoice";

const TransactionList = ({ data, isLoading, error,isLoadingFilter, errors }) => {
  const [showInvoice, setshowInvoice] = useState(false);
  if (isLoading) return <p>...loading</p>;
  
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  console.log(data)
  // console.log(data[0].user.fullname)

  return (
    <>
    <Row>
      <Table striped bordered hover >
  <thead>
    <tr>
      <th>No</th>
      <th>FullName</th>
      <th>Bukti Transfer</th>
      <th> Status Payment</th>
      <th>Action</th>
    </tr>
  </thead>
      {data.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data.length > 0 &&
        data.map((item, index) => (

  <tbody key={index}>
             
    <tr>
                <td> {item.id}</td>
                <td>udin</td>
                {/* <td> {item.house.fullname}</td> */}
                <td> {item.attachment}</td>
                <td> {item.status}</td>
                <td> 
                <BsSearch onClick={() => setshowInvoice(true)} />
                </td>
                <DetailInvoice 
                show={showInvoice}
                handleClose={() => setshowInvoice(false)}
                />
    </tr>
   
  </tbody>
          
        ))}
        </Table>
    </Row>
    </>

  );
};

export default TransactionList;
