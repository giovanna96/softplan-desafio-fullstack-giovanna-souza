import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Login from './login/Login';
import Menu from './menu/Menu';
import Usuario from '../features/usuario/Usuario';
import Processo from '../features/processo/Processo';
import Parecer from '../features/parecer/Parecer';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/usuario" element={<Usuario />} />
        <Route exact path="/processo" element={<Processo />} />
        <Route exact path="/parecer" element={<Parecer />} />
      </Switch>
    </Router>
  );
}

export default Routes;
