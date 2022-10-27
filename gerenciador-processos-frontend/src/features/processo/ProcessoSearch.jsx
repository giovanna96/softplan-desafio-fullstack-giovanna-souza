import { useEffect } from 'react';
import {
  searchProcessos,
  searchSemParecer,
} from '../../redux/actions/proocesso.action';
import ProcessoTable from './ProcessoTable';

const ProcessoSearch = (props) => {
  const { processo, dispatch, auth } = props;
  useEffect(() => {
    if (processo.isParecer) {
      dispatch(searchSemParecer(auth));
    } else {
      dispatch(searchProcessos(auth));
    }
  }, []);
  return (
    <>
      <ProcessoTable processo={processo} dispatch={dispatch} auth={auth} />
    </>
  );
};
export default ProcessoSearch;
