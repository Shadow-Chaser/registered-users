import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import UserList from './pages/UserList/UserList';


export const UsersContext = createContext();

function App() {
  const [users, setUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])

  return (
    <UsersContext.Provider value={[users, setUsers]}>
          <div className="App">
    <Router>
      <Switch>
      <Route exact path='/login'>
            <Login/>
        </Route>
        <Route path='/login'>
            <Login/>
        </Route>
        <Route path='/register'>
            <Register/>
        </Route>
        <Route path='/users'>
            <UserList/>
        </Route>
      </Switch>
      
    </Router>
    </div>
    </UsersContext.Provider>

  );
}

export default App;
