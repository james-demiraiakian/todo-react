import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Header from './containers/Header/Header';
import { getUser, logout } from './services/users';
import { useState } from 'react';
import ToDoListComp from './components/ToDoListComp/ToDoListComp';
import Auth from './components/Auth/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser);

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    <img src="https://http.cat/200" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <h1>ToDo Tasks of List</h1>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <ToDoListComp />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
