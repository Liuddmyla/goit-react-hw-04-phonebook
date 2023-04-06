import React from 'react';
import ContactForm from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

class App extends React.Component {

  state = {
    contacts: [],
    filter: '',
  } 
  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  }

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  } 

  searchName = (newName) => {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === newName.toLowerCase());
  }
  
  formSubmitHandler = data => { 
    if (this.searchName(data.name)) {
      alert(`${data.name} is already in contacts`); 
      return;
    }   
    
   this.setState(prevState => {     
      return { contacts: [data, ...prevState.contacts] }      
    }); 
  }

  deleteContact = (e) => {        
    this.setState({ contacts: this.state.contacts.filter((contact) => contact.id !== e.currentTarget.id) });
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className='box'>        
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterChange={this.filterChange} />
        
        <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact} />           
      </div>
    );
  }  
};

export default App;
