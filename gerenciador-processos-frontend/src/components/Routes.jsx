import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Login from './login/Login';
import Menu from './menu/Menu';
import Usuario from '../features/usuario/Usuario';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/usuario" element={<Usuario />} />
      </Switch>
    </Router>
  );
}

export default Routes;
