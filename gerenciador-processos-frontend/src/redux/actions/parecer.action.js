import { Http } from '../../config/Http';
import { changeProcesso } from './proocesso.action';

export const actionTypes = {
  CHANGE: 'CHANGE_PARECER',
  ADD: 'ADD_PARECER',
};

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const addParecer =
  ({ auth, parecer }) =>
  (dispatch) => {
    return Http.put('/parecer/salvar', parecer, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response !== 'undefined') {
        dispatch(change({ limparDados: true, page: 1, isCadastro: false }));
        dispatch(changeProcesso({ page: 1, isParecer: true }));
      }
    });
  };

export const atribuirParecer =
  ({ auth, parecer }) =>
  (dispatch) => {
    return Http.post('/parecer/atribuir', parecer, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response !== 'undefined') {
        dispatch(change({ limparDados: true, page: 1, isCadastro: false }));
        dispatch(
          changeProcesso({ page: 1, isResponsavel: false, isParecer: false }),
        );
      }
    });
  };
