import { useEffect, useState } from 'react';
import ContactForm from './contactForm/ContactForm';
import  Filter  from './filter/Filter';
import  ContactList  from './contactList/ContactList';

export default function App() {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])  

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  } 

  const searchName = (newName) => {
    return contacts.some(contact => contact.name.toLowerCase() === newName.toLowerCase());
  }
  
  const formSubmitHandler = data => { 

    if (searchName(data.name)) {
      alert(`${data.name} is already in contacts`); 
      return;
    } 
    
    setContacts([data, ...contacts]);  
  }

  const deleteContact = (e) => { 
    setContacts(contacts.filter((contact) => contact.id !== e.currentTarget.id));   
  }
  
  const visibleContacts = getVisibleContacts();

  return (
    <div className='box'>        
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter filter={filter} filterChange={filterChange} />
        
      <ContactList visibleContacts={visibleContacts} deleteContact={deleteContact} />           
    </div>
  );
 } 

