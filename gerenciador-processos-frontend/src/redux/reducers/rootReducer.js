import { combineReducers } from 'redux';
import autenticacaoReducer from './autenticacao.reducer';
import usuarioReducer from './usuario.reducer';
import processoReducer from './processo.reducer';
import parecerReducer from './parecer.reducer';

const rootReducer = combineReducers({
  autenticacaoReducer,
  usuarioReducer,
  processoReducer,
  parecerReducer,
});

export default rootReducer;
