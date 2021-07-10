import { Row,Button, Col } from "react-bootstrap";

import { useState,useEffect,useContext } from "react";
import { FilterContext} from "../contexts/filterContext";
import Sidebar from "../components/Sidebar";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";

const Home = () => {
  const [dataApi, setData] = useState(null);
  const [loading, setLoading] = useState(true);
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
    const response = await API.get("/houses");
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
    return response.data.data;
  });

    const getProduct = async () => {
    // e.preventDefault()
      // const response = await API.get(`/houses`);
      const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
// console.log(amenities)
      // const response = await API.get(`/house?typeRent=${typeRent}&amenities=${amenities}&price=${price}&bedroom=${bedroom}&bathroom=${bathroom}`);
      console.log(response);
      setData(response.data.data);
      setLoading(false);
    };

    getProduct();
    useEffect(() => {
      return () => {
        setData(null);
      };
    }, []);
    console.log(dataApi)
    // console.log(dataApi[0].fullname)
    // const { showing } = state;



    const [page, setPage] = useState(true)
    return (
    <div> 
      <Row>
        <Col xs={4}>
          <Sidebar />
          {/* <p></p> */}
          <Row>
            <Button  onClick={() => setPage("about")} className="justic=fy" variant="primary" type="submit">
                Apply
            </Button>
        </Row>
        </Col>
        <Col>
          {page === "about" ? <CardList data={dataApi} isLoading={isLoading} error={error} />
        :  
        // <p>jsnajdnsjdnaj</p>
        <CardList data={data} isLoading={isLoading} error={error} />

        }
        </Col>
      </Row>
    </div>
  );
};

export default Home;
