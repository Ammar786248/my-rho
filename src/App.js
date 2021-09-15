import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Submission from "./pages/Submission/index";

import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/welcome">
            <Submission />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
