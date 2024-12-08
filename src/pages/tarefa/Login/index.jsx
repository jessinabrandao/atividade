import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material'; // Importação única

const Login = () => {
  const [Login, setLogin] = useState('');

  return (
    <Grid container spacing={2} direction="column" alignItems="center">
      <Grid item xs={12}>
        <FormControl fullWidth>
          <Input
            id="Login_nome"
            aria-describedby="Login_nome_helper_text"
            value={Login}
            onChange={e => { setLogin(e.target.value); }}
          />
          <FormHelperText id="Login_nome_helper_text">Login.</FormHelperText>
        </FormControl>
      </Grid>

      {/* Adicionando o texto */}
      <Grid item xs={12}>
        <p>Bem-vindo! Insira o seu Login.</p>
      </Grid>
    </Grid>
  );
};

export default Login;