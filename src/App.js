import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TextoPrincipal from "./component/texto/TextoPricipal";

function App() {
  return (
      <div className="container" class="App-align-elements-center">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>Postagens</h1>
                  <Switch>
                      <Route path="/" exact component={TextoPrincipal} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: '#2e6da4',
    margin: '10px'
}

export default App;
