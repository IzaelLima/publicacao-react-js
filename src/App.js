import React from 'react';
import './App.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TextoPrincipal from "./component/texto/TextoPricipal";
import {createStore, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {Provider}  from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

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
    
          <Provider store={store}>
            <div>
                <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                getState={(state) => state.toastr}
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick/>
            </div>
        </Provider>
      </div>
  );
}

const style = {
    color: '#2e6da4',
    margin: '10px'
}

export default App;
