import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import { addParecer, change } from '../../redux/actions/parecer.action';
import { changeProcesso } from '../../redux/actions/proocesso.action';

const NewParecer = (props) => {
  const { parecer, dispatch, auth } = props;
  const handleSubmit = (event) => {
    dispatch(addParecer({ auth, parecer: parecer.item }));
  };

  const handleVoltar = () => {
    dispatch(change({ page: 1, limparDados: true, isCadastro: false }));
    dispatch(changeProcesso({ page: 1, isParecer: true }));
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
              Cadastro de Parecer
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          style={{ paddingLeft: '2%', minWidth: 300 }}
          direction="row"
          rowSpacing={0.1}
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
              id="codResponsavel"
              label="Código Responsavel"
              value={auth.id}
              disabled
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="standard"
              multiline
              rows={6}
              id="conteudoParecer"
              label="Conteúdo do Parecer"
              value={parecer.item.conteudoParecer}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  change({
                    item: {
                      ...parecer.item,
                      conteudoParecer: input.target.value,
                    },
                  }),
                )
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={parecer.item.parecerExecutado}
                  value={parecer.item.parecerExecutado}
                  onChange={(input) =>
                    dispatch(
                      change({
                        item: {
                          ...parecer.item,
                          parecerExecutado: input.target.checked,
                        },
                      }),
                    )
                  }
                />
              }
              style={{ paddingTop: '1%' }}
              label="Finalizado"
            />
          </Grid>

          {!parecer.item.parecerExecutado ? (
            <Grid item sm={1} style={{ paddingTop: '2%' }}>
              <Button variant="contained" size="large" type="submit">
                Cadastrar
              </Button>
            </Grid>
          ) : (
            ''
          )}
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
export default NewParecer;
