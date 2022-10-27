import { combineReducers } from 'redux';
import autenticacaoReducer from './autenticacao.reducer';
import usuarioReducer from './usuario.reducer';
import processoReducer from './processo.reducer';

const rootReducer = combineReducers({
  autenticacaoReducer,
  usuarioReducer,
  processoReducer,
});

export default rootReducer;
