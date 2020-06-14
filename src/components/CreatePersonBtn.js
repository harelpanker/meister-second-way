import React, { Component } from "react";
import styles from "./styles/CreatePersonBtnStyles";
import uuid from "react-uuid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

class CreatePersonBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.createPerson({ ...this.state, id: uuid() });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.btn}>
        <Button variant='contained' color='primary' onClick={this.handleSubmit}>
          Add New Person
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePersonBtn);
