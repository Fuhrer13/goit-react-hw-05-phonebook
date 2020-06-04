import React, { Component } from "react";
import Contacts from "./Components/Contacts/Contacts";
import Filter from "./Components/Filter/Filter";
import Phonebook from "./Components/Phonebook/Phonebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocalStorage from "./Helpers/LocalStorage";
import classes from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import pop from "./Transitions/pop.module.css";
toast.configure();

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeHandler = (element) => {
    const value = element.target.value;
    this.setState({ filter: value });
  };

  addContact = (contact) => {
    const { contacts } = this.state;
    const names = contacts.map((element) => element.name);
    if (names.includes(contact.name)) {
      toast.warn(`This name is already in contact list`);
    } else if (contact.name.length > 2 && contact.number.length > 5) {
      this.setState({ contacts: [...this.state.contacts, contact] });
    } else {
      toast.eror("length too short ...");
    }
  };

  deleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidMount() {
    const saveContacts = LocalStorage.get("contacts");
    if (!saveContacts) {
      return;
    }
    this.setState({
      contacts: saveContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      LocalStorage.save("contacts", this.state.contacts);
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const contactList = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <>
        <div className={classes.container}>
          <CSSTransition in classNames="title" timeout={500} appear>
            <h2 className={classes.title}>Phonebook</h2>
          </CSSTransition>
          <Phonebook addContact={this.addContact} />
          <ToastContainer autoClose={5000} />
          {this.state.contacts.length >= 2 && (
            <CSSTransition timeout={250} classNames={pop}>
              <Filter filter={filter} changeFilter={this.changeHandler} />
            </CSSTransition>
          )}
          <Contacts contactList={contactList} onDelete={this.deleteContact} />
        </div>
      </>
    );
  }
}
