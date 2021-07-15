
import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";

import not_found from "../assets/images/not_found.svg";
const CardList = ({ data, isLoading, error,isLoadingFilter, errors }) => {
  if (isLoadingFilter) return <p>...loading</p>;
  if (isLoading) return <p>...loading</p>;
  if (error) return <h1>Error occured: {error.response.data.message}</h1>;
  if (errors) return <h1>Error occured: {errors.response.data.message}</h1>;
  // console.log(data.length)
  return (
    <Row>
      {data.length <= 0 && (
        <img src={not_found} width="100%" height="100%" alt="not found" />
      )}
      {data.length > 0 &&
        data.map((item, index) => (
          <Col key={index}>
            <CardItem item={item} />
          </Col>
        ))}
    </Row>
  );
};

export default CardList;
