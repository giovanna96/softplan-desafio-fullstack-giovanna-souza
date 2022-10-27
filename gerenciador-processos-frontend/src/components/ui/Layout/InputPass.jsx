import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import React from 'react';

const InputPass = (props) => {
  const { valor, handleChange } = props;
  const [exibeSenha, setExibeSenha] = React.useState(true);
  const handleClickShowPassword = () => {
    setExibeSenha(!exibeSenha);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl sx={{ m: 1, width: '26ch' }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={exibeSenha ? 'text' : 'password'}
          value={valor}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {exibeSenha ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          required
        />
      </FormControl>
    </>
  );
};

export default InputPass;
