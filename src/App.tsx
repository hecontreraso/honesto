import React, { useState } from "react";
import Main from "screens/Main";
import Login from "screens/Login";

import "./App.scss";

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      {loggedIn ? <Main /> : <Login login={() => setLoggedIn(true)} />}
    </div>
  );
};

export default App;
