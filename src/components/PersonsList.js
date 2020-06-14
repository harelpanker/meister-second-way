import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PersonListStyles";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class PersonsList extends Component {
  constructor(props) {
    super(props);
    this.state = { person: this.props.name };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.editPerson(this.props.id, this.state.person);
    this.setState({ person: "" });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleRemove() {
    this.props.removePerson(this.props.id);
  }

  render() {
    const { name, classes } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.personHeaderWrapper}>
          {/* <p className={classes.text}>Person Id: {this.props.id}</p> */}
          <p className={classes.text}>Person name: {name}</p>
          <IconButton
            type='submit'
            className={(classes.btn, classes.deleteBtn)}
            onClick={this.handleRemove}>
            <Icon fontSize='small'>delete_circle</Icon>
          </IconButton>
        </div>

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
          <IconButton type='submit' className={classes.btn}>
            <Icon fontSize='small'>edit_circle</Icon>
          </IconButton>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(PersonsList);
