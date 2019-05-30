import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./Main.scss";
import NavBar from "components/shared/NavBar";
import ShareFeedback from "screens/ShareFeedback";
import MyFeedback from "screens/MyFeedback";

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Route path="/" exact component={ShareFeedback} />
      <Route path="/sharefeedback" exact component={ShareFeedback} />
      <Route path="/myfeedback" exact component={MyFeedback} />
    </BrowserRouter>
  );
};

export default Main;
