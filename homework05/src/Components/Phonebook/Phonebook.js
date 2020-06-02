import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Phonebook.module.css";
import { v4 as uuidv4 } from "uuid";
import { CSSTransition } from "react-transition-group";
import "../../Transitions/title.module.css";

class Phonebook extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  changeHandler = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={classes.form}>
        <CSSTransition in classNames="title" timeout={500} appear>
          <h2 className={classes.title}>Phonebook</h2>
        </CSSTransition>
        <label htmlFor="name" className={classes.lebel}>
          <p className={classes.name}>Name</p>
          <input
            type="text"
            id={name}
            name="name"
            value={name}
            onChange={this.changeHandler}
            className={classes.input}
          />
        </label>

        <label htmlFor="number" className={classes.lebel}>
          <p className={classes.name}>Number</p>
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.changeHandler}
            id={number}
            className={classes.input}
          />
        </label>
        <button type="submit" className={classes.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
