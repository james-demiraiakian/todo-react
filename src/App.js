import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './containers/Header/Header';
import { getUser, logout } from './services/users';
import { useState } from 'react';
import Authenticate from './containers/Authenticate/Authenticate';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser);

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h2>Signed In</h2>
                <img src="https://http.cat/200" />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Authenticate setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
