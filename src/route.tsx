import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import financa from './pages/Financas/Financas'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/financa" exact component={financa} />
    </Switch>
  );
}

export default Routes;
