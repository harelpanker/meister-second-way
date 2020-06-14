import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/CreatePersonStyles";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import PersonsList from "./PersonsList";
import CreatePersonBtn from "./CreatePersonBtn";

class CreatePerson extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
    this.createPerson = this.createPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
  }
  // async componentDidMount() {

  // }
  createPerson(newPerson) {
    this.setState((state) => ({
      persons: [...state.persons, newPerson],
    }));
  }
  updatePerson(id, updatedName) {
    let updatedPersons = this.state.persons.map((person) => {
      if (person.id === id) {
        return { ...person, name: updatedName };
      }
      return person;
    });
    this.setState({ persons: updatedPersons });
  }

  render() {
    const { classes } = this.props;
    let allPresons = this.state.persons.map((person) => (
      <ListItem key={person.id}>
        <PersonsList
          id={person.id}
          name={person.name}
          editPerson={this.updatePerson}
        />
      </ListItem>
    ));

    return (
      <div className={classes.container}>
        <Typography variant='h3' component='h1' gutterBottom>
          New Person App
        </Typography>
        <CreatePersonBtn createPerson={this.createPerson} />
        <List>{allPresons}</List>
      </div>
    );
  }
}

export default withStyles(styles)(CreatePerson);
