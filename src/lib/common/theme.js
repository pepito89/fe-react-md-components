import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles"

const adludioTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#7347ff',
      dark: '#643fd9',
      light: '#a347ff'
    }
  },
  shape: {
    borderRadius: '2em'
  }
});

const withAdludioTheme = Component => {
  return class extends React.Component {
    render(){
      return (
        <ThemeProvider theme={adludioTheme}>
          <Component {...this.props}>
            {this.props.children}
          </Component>
        </ThemeProvider>
      );
    }
  }
};

export { adludioTheme, withAdludioTheme };
