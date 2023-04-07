import  { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { nanoid } from "nanoid";

export default function ContactForm({ onSubmit }) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameId = nanoid();   

  const handleChange = event => { 
  
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'number') {
      setNumber(event.currentTarget.value)
    }  
  }
    
  const handleSubmit = event => {
    event.preventDefault(); 
    
    onSubmit({
    name,
    number,
    id: nanoid()
    });
    
    reset();
  }
    
  const reset = () => {
    setName('');
    setNumber(''); 
    nameId = nanoid();   
  };    

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css['item-form']}>
        <label htmlFor={nameId} className={css['label-form']}>Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css['input-form']}
        />
      </div>

      <div className={css['item-form']}>
        <label htmlFor={nameId} className={css['label-form']}>Number</label>
        <input
          type="tel"
          name="number"           
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css['input-form']}
        />
      </div>          
          
      <button type="submit" className={css['btn-form']}>Add contact</button>
    </form>)
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,      
}