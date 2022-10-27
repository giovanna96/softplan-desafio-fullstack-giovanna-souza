import {
  Button,
  Divider,
  inputAdornmentClasses,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import {
  addParecer,
  atribuirParecer,
  change,
} from '../../redux/actions/parecer.action';
import { changeProcesso } from '../../redux/actions/proocesso.action';
import UsuarioParecerTable from './UsuarioParecerTable';

const AtribuirParecer = (props) => {
  const { parecer, dispatch, auth } = props;

  const handleSubmit = (event) => {
    dispatch(atribuirParecer({ auth, parecer: parecer.item }));
  };

  const handleVoltar = () => {
    dispatch(change({ page: 1, limparDados: true, isCadastro: false }));
    dispatch(
      changeProcesso({ page: 1, isParecer: true, isResponsavel: false }),
    );
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <Grid
          container
          alignItems="center"
          style={{ paddingTop: '1%', paddingLeft: '1%', minWidth: 300 }}
          direction="row"
          rowSpacing={0.1}
        >
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Cadastro de Responsaveis Parecer
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          style={{ paddingLeft: '2%', minWidth: 300 }}
          direction="row"
          rowSpacing={5}
        >
          <Grid item xs={12}>
            <TextField
              variant="standard"
              id="codParecer"
              label="Código Processo"
              value={parecer.item.idProcesso}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              id="codParecer"
              label="Atribuir Usuários"
              value={parecer.item.responsaveisStr}
              onChange={(input) =>
                dispatch(
                  change({
                    item: {
                      ...parecer.item,
                      responsaveisStr: input.target.value,
                      responsaveis: input.target.value.split(',').map(Number),
                    },
                  }),
                )
              }
            />
          </Grid>

          <Grid item sm={1} style={{ paddingTop: '2%' }}>
            <Button variant="contained" size="large" type="submit">
              Cadastrar
            </Button>
          </Grid>

          <Grid item sm={1} style={{ paddingTop: '2%' }}>
            <Button
              variant="contained"
              size="large"
              type="button"
              onClick={() => handleVoltar()}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default AtribuirParecer;
