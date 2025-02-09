import { actionTypes } from '../actions/autenticacao.action';

const initialState = {
  id: '',
  login: '',
  senha: '',
  roles: '',
  page: 1,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGAR:
      return { ...state, ...payload };

    case actionTypes.DESLOGAR:
      return { ...state, ...payload };

    default:
      return state;
  }
};
