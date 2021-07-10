// import AddProduct from "../components/form/AddProduct";
import CardList from "../components/CardList";
import { API } from "../config/api";
import { useQuery } from "react-query";
import { Container } from "react-bootstrap";
function House() {
  const { isLoading, data, error, refetch } = useQuery("houses", async () => {
    const response = await API.get("/houses");
    return response.data.data;
  });

  const handleAddProduct = async (data, config) => {
    await API.post("/houses", data, config);
    refetch();
  };
  return (
    <Container>
      {/* <AddProduct onAddProduct={handleAddProduct} /> */}
      <hr />
      <CardList data={data} isLoading={isLoading} error={error} />
    </Container>
  );
}

export default House;
