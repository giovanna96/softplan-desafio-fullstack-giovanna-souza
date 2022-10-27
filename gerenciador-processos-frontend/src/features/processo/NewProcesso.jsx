import { Button, Divider, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import {
  addProcesso,
  changeProcesso,
} from '../../redux/actions/proocesso.action';

const NewProcesso = (props) => {
  const { processo, dispatch, auth } = props;
  const handleSubmit = (event) => {
    if (!processo.isVisualizar) {
      dispatch(addProcesso({ auth, processo: processo.item }));
    }
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
              {!processo.isVisualizar
                ? 'Cadastro de Processo'
                : 'Processo - n.º' + processo.item.numeroProcesso}
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
              id="codProcesso"
              label="Código"
              value={processo.item.id}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              id="nProcesso"
              label="Nome"
              value={processo.item.numeroProcesso}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  changeProcesso({
                    item: {
                      ...processo.item,
                      numeroProcesso: input.target.value,
                    },
                  }),
                )
              }
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="standard"
              id="descProcesso"
              label="Descrição"
              value={processo.item.descProcesso}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  changeProcesso({
                    item: {
                      ...processo.item,
                      descProcesso: input.target.value,
                    },
                  }),
                )
              }
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="standard"
              multiline
              rows={6}
              id="infoProcesso"
              label="Informações do Processo"
              value={processo.item.infoProcesso}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  changeProcesso({
                    item: {
                      ...processo.item,
                      infoProcesso: input.target.value,
                    },
                  }),
                )
              }
              required
            />
          </Grid>

          {!processo.isVisualizar ? (
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
              onClick={() => dispatch(changeProcesso({ page: 1 }))}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default NewProcesso;
