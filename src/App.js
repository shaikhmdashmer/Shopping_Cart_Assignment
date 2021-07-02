

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";



function App() {
 

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/checkout">
              <Header />
              <CheckoutPage />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
