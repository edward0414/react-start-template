import React from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";
// import Header from "../../components/header";

// import Sidebar from "../../components/sidebar";

// import Footer from "../../components/footer";

import Dashboard from "../Dashboard";

function Component1() {
  return <div>Component 1</div>;
}
function Component2() {
  return <div>Component 2</div>;
}

function App() {
  return (
    <div className="app">
      <div className="app__width">
        {/* <Header /> */}
        <div className="app__content-layout">
          {/* <Sidebar /> */}
          <div className="app__link-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/1" component={Component1} />
              <Route exact path="/2" component={Component2} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
