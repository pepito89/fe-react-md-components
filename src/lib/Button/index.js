import React from "react"
import Button from "@material-ui/core/Button"

export default props => (
    <Button
      variant = "contained"
      color = "secondary"
    >
      {props.children}
    </Button>
); 
