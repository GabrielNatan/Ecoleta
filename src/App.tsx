import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import {Home} from "./Pages/Home"
import {Cadastro} from "./Pages/Cadastro"
import {Lista} from "./Pages/Lista"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/" component={Cadastro}/>
        <Route exact={true} path="/" component={Lista}/>
      </Switch>
    </Router>
  );
}

export default App;
