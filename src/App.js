import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/main-page";
import OutputForm from "./components/output/OutputForm";
import InputForm from "./components/input/InputForm";
import OutputSearchPage from "./components/outputDB/OutputSearchPage";
import InputSearchPage from "./components/InputDB/InputSearchPage";
import InputPrint from "./components/InputPrint/InputPrint";
import OutputPrint from "./components/OutputPrint/OutputPrint";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={OutputSearchPage} path="/output/outputdb"></Route>
      <Route component={InputSearchPage} path="/input/inputdb"></Route>
      <Route component={OutputPrint} path="/output/:id"></Route>
      <Route component={InputPrint} path="/input/:id"></Route>
      <Route component={OutputForm} path="/output"></Route>
      <Route component={InputForm} path="/input"></Route>
      <Route component={MainPage} path="/"></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
