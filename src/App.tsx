import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import {Home} from "./Pages/Home"
import {Cadastro} from "./Pages/Cadastro"
import {Lista} from "./Pages/Lista"
import {GlobalStyle} from "./styleGlobal"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/cadastro" component={Cadastro}/>
        <Route exact={true} path="/lista" component={Lista}/>
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
