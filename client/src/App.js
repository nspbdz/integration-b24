import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Container } from "react-bootstrap";
import { UserContextProvider } from "./contexts/userContext";
import { FilterContextProvider } from "./contexts/filterContext";
import PrivateRoute from "./components/route/PrivateRoute";
import DetailHouse from "./pages/DetailHouse";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import MyBooking from "./pages/MyBooking";
// MyBooking
// import DetailProduct from "./pages/DetailProduct";
import { API, setAuthToken } from "./config/api";
import { useContext, useEffect } from "react";
import House from "./pages/House";

if (localStorage.getItem("token")) {
  setAuthToken(localStorage.getItem("token"));
}
const tokens=localStorage.getItem("token");
console.log(tokens);
console.log(setAuthToken);
const App = () => {

  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
       <UserContextProvider>
        <FilterContextProvider>
       
          <Router>
            <Header />
            <Container fluid="lg">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/houses" component={House} />
                <Route exact path="/house/:id" component={DetailHouse} />
                {/* <Route exact path="/MyBooking" component={MyBooking} /> */}
                <PrivateRoute exact path="/MyBooking" component={MyBooking} />
               
                {/* <PrivateRoute exact path="/house/:id" component={DetailHouse} /> */}
                {/* <PrivateRoute exact path="/product/:id" component={DetailProduct} /> */}
              </Switch>
            </Container>
          </Router>
        
        </FilterContextProvider>
      </UserContextProvider>

    </QueryClientProvider>
  );
};

export default App;
