import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployee from "./components/CreateEmployee";
import Navigation from "./components/Navigation";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
          <BrowserRouter>
              <div className="container-fluid">
                  <div className="row">
                      <Navigation/>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <Switch>
                          <Route path="/create" component={ CreateEmployee }/>
                          <Route path="/" component={ ListEmployeeComponent }/>
                      </Switch>
                  </div>
              </div>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
