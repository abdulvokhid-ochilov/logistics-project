import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/main-page";
// import MainLayout from "./HOC/mainLayout";
// import Home from "./components/home/index";
// import Header from "./components/header";
// import Contact from "./components/contact/contact";
// import PostComp from "./components/posts/postComp";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route component={PostComp} path="/article/:id"></Route>
      <Route component={Contact} path="/contact"></Route> */}
      <Route component={MainPage} path="/"></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
