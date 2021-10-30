import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/main-page";
import OutputPage from "./components/output/OutputPage";
import InputPage from "./components/input/InputPage";
// import MainLayout from "./HOC/mainLayout";
// import Home from "./components/home/index";
// import Header from "./components/header";
// import Contact from "./components/contact/contact";
// import PostComp from "./components/posts/postComp";

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route component={PostComp} path="/article/:id"></Route>
      <Route component={Contact} path="/contact"></Route> */}
      <Route component={OutputPage} path="/output"></Route>
      <Route component={InputPage} path="/input"></Route>
      <Route component={MainPage} path="/"></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
