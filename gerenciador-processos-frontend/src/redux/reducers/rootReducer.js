import { combineReducers } from 'redux';
import autenticacaoReducer from './autenticacao.reducer';
import usuarioReducer from './usuario.reducer';

const rootReducer = combineReducers({
  autenticacaoReducer,
  usuarioReducer,
});

export default rootReducer;
