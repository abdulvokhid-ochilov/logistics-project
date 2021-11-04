import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./components/main/main-page";
// import OutputPage from "./components/output/OutputPage";
// import InputPage from "./components/input/InputPage";
// import OutputDB from "./components/outputDB/OutputDB";
import OutputForm from "./components/output/OutputForm";
import InputForm from "./components/input/InputForm";
import OutputSearchPage from "./components/outputDB/OutputSearchPage";
import InputSearchPage from "./components/InputDB/InputSearchPage";
import InputPrint from "./components/InputPrint/InputPrint";
import OutputPrint from "./components/OutputPrint/OutputPrint";

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route component={PostComp} path="/article/:id"></Route>
      <Route component={Contact} path="/contact"></Route> */}
      <Route component={OutputPrint} path="/api/v1/output/:id"></Route>
      <Route component={InputPrint} path="/api/v1/input/:id"></Route>
      <Route component={OutputSearchPage} path="/output/outputdb"></Route>
      <Route component={OutputForm} path="/output"></Route>
      <Route component={InputSearchPage} path="/input/inputdb"></Route>
      <Route component={InputForm} path="/input"></Route>
      <Route component={MainPage} path="/"></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
