import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PersonListStyles";

class PersonsList extends Component {
  constructor(props) {
    super(props);
    this.state = { person: this.props.name };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.editPerson(this.props.id, this.state.person);
    this.setState({ person: "" });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    // const { id, name, classes } = this.props;
    const { name, classes } = this.props;
    return (
      <div className={classes.card}>
        {/* <p className={classes.text}>Person Id: {id}</p> */}
        <p className={classes.text}>Person name: {name}</p>
        <form
          onSubmit={this.handleUpdate}
          noValidate
          autoComplete='off'
          className={classes.form}>
          <input
            type='text'
            name='person'
            autoComplete='off'
            placeholder='Change Name'
            value={this.state.person}
            onChange={this.handleChange}
            className={classes.editInput}
          />
          <button type='submit' className={classes.btn}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PersonsList);
