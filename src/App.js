import React from 'react';

import { Input, Button } from './lib/';

class App extends React.Component{
  render(){
    return (
      <div>
        <div>
          <Input
            label = "Names"
            required
            error
          />
        </div>
        <div>
          <Button
            variant = "contained"
          >
            Chocolate
          </Button>
          <Button
            variant = "outlined"
          >
            Coffee
          </Button>
          <Button>
            Tea
          </Button>
          <Button
            disabled
          >
            Unavailable
          </Button>
        </div>
      </div>
    );
  }
};

export default App;
