import { Route, Switch} from 'react-router-dom'
import HomeLogin from './pages/HomeLogin/HomeLogin'
import Home from './pages/Home/Home'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={HomeLogin} />
      <Route path="/home" exact component={Home} />
    </Switch>
  )
}

export default Routes