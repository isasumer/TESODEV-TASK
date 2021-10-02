import Home from "./pages/Home";
import Result from "./pages/Result";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/result" component={Result} />
    </Router>
  );
}
export default App;
