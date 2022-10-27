import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const UsuarioParecerTable = (props) => {
  const { parecer } = props;

  return (
    <>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow style={{ background: '#bfbfbf47' }}>
              <TableCell>Cód.</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Papeis</TableCell>
              <TableCell>Ativo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parecer.item.responsaveis.length > 0 ? (
              parecer.item.responsaveis?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nome}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.papeis}</TableCell>
                  <TableCell>
                    <Checkbox
                      name="checkedB"
                      color="primary"
                      checked={item.ativo}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>Nenhum registro encontrado</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default UsuarioParecerTable;
