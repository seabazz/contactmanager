import React, { Component } from "react";
import { Provider } from "./context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />

          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
