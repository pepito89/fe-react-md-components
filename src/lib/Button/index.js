import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import { withAdludioTheme, adludioTheme } from '../common/theme';

const useStyles = makeStyles(theme => {
  const border = `2px solid ${theme.palette.primary.main}`;
  return {
    root: {
      height: '40px',
      '&:disabled': {
        backgroundColor: '#cebfff',
        color: 'white',
      },
    },
    label: {
      padding: '0 0.5em',
    },
    outlined: {
      border,
      '&:hover': {
        border,
      }
    }
  };
});

export default withAdludioTheme(props => {
  const classes = useStyles(props);
  return (
    <Button
      color="primary" // to default
      classes = {classes}
      {...props}
    >
      {props.children}
    </Button>
  );
});
