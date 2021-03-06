import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
import { FilterContext} from "../contexts/filterContext";
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";

const Home = () => {
  const [dataApi, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const contextValue = useContext(FilterContext);
  // console.log(contextValue)
  // console.log(contextValue[0].data.amenities)
  const amenities= contextValue[0].data.amenities
  const typeRent= contextValue[0].data.typeRent
  const price= contextValue[0].data.price
  const bedroom= contextValue[0].data.bedroom
  const bathroom= contextValue[0].data.bathroom
  console.log(typeRent)

  const { isLoading, data, error } = useQuery("houses", async () => {
    // const response = await API.get("/houses");
      const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
    return response.data.data;
  });

  // const  {isLoadingFilter, errors } = useQuery("houses", async () => {

    const getProduct = async () => {
    const response = await API.get("/houses");

      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      console.log(response);
      setData(response.data.data);
      setLoadingFilter(false);
    };
  
    useEffect(() => {
      getProduct();
      return () => {
        setData(null);
      };
    }, []);
    console.log(dataApi)

    const [page, setPage] = useState(false)
  
console.log(loadingFilter)
    return (
    <div> 
      <Row>
        <Col xs={4}>
          <Sidebar />
          <Row>
             <Button  onClick={getProduct => setPage(true)} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
        </Row>
        </Col>
        <Col>
          {page === true 
          ? 
          <CardList data={data} isLoading={isLoading} error={error} />
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={dataApi} isLoading={isLoading} error={error} />

        }
        </Col>
      </Row>
    </div>
  );
};

export default Home;
