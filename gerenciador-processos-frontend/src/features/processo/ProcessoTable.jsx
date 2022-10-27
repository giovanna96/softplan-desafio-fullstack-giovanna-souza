import {
  Button,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { changeProcesso } from '../../redux/actions/proocesso.action';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { change } from '../../redux/actions/parecer.action';
import { useSelector } from 'react-redux';

const ProcessoTable = (props) => {
  const { processo, dispatch, auth } = props;
  const parecer = useSelector((state) => state.parecerReducer);
  const handleAddResponsaveis = (item) => {
    dispatch(
      change({
        item: {
          ...parecer.item,
          idProcesso: item.id,
        },
      }),
    );
    dispatch(
      changeProcesso({
        item: item,
        page: 2,
        isResponsaveis: true,
      }),
    );
  };
  const handleAddParecer = (item) => {
    dispatch(
      change({
        item: {
          ...parecer.item,
          idProcesso: item.id,
        },

        isCadastro: true,
      }),
    );
    dispatch(
      changeProcesso({
        item: item,
        page: 2,
      }),
    );
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center"
        style={{ paddingTop: 10 }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Consulta de Processos
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={10}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow style={{ background: '#bfbfbf47' }}>
                  <TableCell>Cód.</TableCell>
                  <TableCell>n.º Processo</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  {!processo.isParecer ? <TableCell></TableCell> : ''}
                  {processo.isParecer ? <TableCell></TableCell> : ''}
                </TableRow>
              </TableHead>
              <TableBody>
                {processo.itens.length > 0 ? (
                  processo.itens?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.numeroProcesso}</TableCell>
                      <TableCell>{item.descProcesso}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() =>
                            dispatch(
                              changeProcesso({
                                item: item,
                                page: 2,
                                isVisualizar: true,
                              }),
                            )
                          }
                        >
                          <FileOpenIcon />
                        </IconButton>
                      </TableCell>
                      {!processo.isParecer ? (
                        <TableCell>
                          <IconButton
                            onClick={() => handleAddResponsaveis(item)}
                          >
                            <AddCircleIcon />
                          </IconButton>
                        </TableCell>
                      ) : (
                        ''
                      )}
                      {processo.isParecer ? (
                        <TableCell>
                          <IconButton onClick={() => handleAddParecer(item)}>
                            <PostAddIcon />
                          </IconButton>
                        </TableCell>
                      ) : (
                        ''
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>
                      Nenhum registro encontrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {!processo.isParecer ? (
        <Grid
          container
          justifyContent={'flex-end'}
          style={{ paddingTop: '1%', paddingRight: '10%' }}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(
                changeProcesso({
                  limparDados: true,
                  page: 2,
                  isVisualizar: false,
                }),
              )
            }
          >
            Novo
          </Button>
        </Grid>
      ) : (
        ''
      )}
    </>
  );
};

export default ProcessoTable;
