import { useEffect } from 'react';
import { searchProcessos } from '../../redux/actions/proocesso.action';
import ProcessoTable from './ProcessoTable';

const ProcessoSearch = (props) => {
  const { processo, dispatch, auth } = props;
  useEffect(() => {
    dispatch(searchProcessos(auth));
  }, []);
  return (
    <>
      <ProcessoTable processo={processo} dispatch={dispatch} auth={auth} />
    </>
  );
};
export default ProcessoSearch;
