import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

import TextField from '@material-ui/core/TextField';

const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

export default props => (
  <ThemeProvider theme={theme}>
    <TextField
      label="Dense"
      margin="dense"
    />
  </ThemeProvider>
);
