import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Home from "../Home";
// not sure if we want footer
import Footer from "../../components/footer";
import FormManager from "../FormManager";

function App() {
  return (
    <div className="app">
      <div className="app__width">
        {/* <Header /> */}
        <div className="app__content-layout">
          <Sidebar />
          <div className="app__link-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/1" component={FormManager} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
