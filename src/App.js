import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/Homepage";
import MoreDetail from "./pages/MoreDetail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/moredetail">
          <MoreDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
