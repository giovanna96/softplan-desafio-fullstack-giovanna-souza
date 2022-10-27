import { useSelector } from 'react-redux';
import ProcessoSearch from './ProcessoSearch';
import NewProcesso from './NewProcesso';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/ui/Layout/NavBar';
import { useEffect } from 'react';
import { changeProcesso } from '../../redux/actions/proocesso.action';

const Processo = () => {
  const processo = useSelector((state) => state.processoReducer);
  const auth = useSelector((state) => state.autenticacaoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeProcesso({ isParecer: false }));
  }, []);
  return (
    <>
      <NavBar />
      {processo.page === 1 ? (
        <ProcessoSearch processo={processo} dispatch={dispatch} auth={auth} />
      ) : (
        <NewProcesso processo={processo} dispatch={dispatch} auth={auth} />
      )}
    </>
  );
};
export default Processo;
