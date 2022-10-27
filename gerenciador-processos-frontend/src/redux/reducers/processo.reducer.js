import { actionTypes } from '../actions/proocesso.action';

const initialState = {
  itens: [],
  item: {
    numeroProcesso: '',
    infoProcesso: '',
    descProcesso: '',
  },
  erro: '',
  msgErro: '',
  page: 1,
  isVisualizar: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      if (payload.hasOwnProperty('limparDados') && payload.limparDados) {
        payload.item = initialState.item;
      }
      return { ...state, ...payload };

    default:
      return state;
  }
};
