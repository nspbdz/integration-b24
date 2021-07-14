
import { Col, Row,Table } from "react-bootstrap";
import TransactionItem from "./TransactionItem";

import not_found from "../assets/images/not_found.svg";
const TransactionList = ({ data, isLoading, error,isLoadingFilter, errors }) => {
  // if (isLoading) return <p>...loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  console.log(data)
  return (
    <>
    <Row>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
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
                <td> {item.user.fullname}</td>
                <td> {item.attachment}</td>
                <td> {item.status}</td>
                <td> 
                
                </td>
    </tr>
   
  </tbody>
          
        ))}
        </Table>
    </Row>
    </>

  );
};

export default TransactionList;
