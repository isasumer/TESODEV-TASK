import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/">  <Home/>        </Route>
      <Route path="/result">  <Result/>      </Route>
    </Router>
  );
}
export default App;
