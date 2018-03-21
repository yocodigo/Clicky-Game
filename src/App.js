import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FriendsPage from "./pages/FriendsPage";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={FriendsPage} />
      </Wrapper>
    </div>
  </Router>
);

export default App;
