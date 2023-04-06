import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'
import { nanoid } from "nanoid";

class ContactForm extends React.Component{

state = {  
  name: '',
  number: '',
}

nameId = nanoid(); 

handleChange = event => { 
    
  this.setState({ 
    [event.currentTarget.name]: event.currentTarget.value,      
  });
}
    
handleSubmit = event => {
  event.preventDefault();  
   
  this.props.onSubmit({
    ...this.state,
    id: nanoid()
  });
    
  this.reset();
}
    
reset = () => {
  this.setState({ name: '', number: '' });
  this.nameId = nanoid();   
};
    
render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css['item-form']}>
          <label htmlFor={this.nameId} className={css['label-form']}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameId}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            className={css['input-form']}
          />
        </div>

        <div className={css['item-form']}>
          <label htmlFor={this.numberId} className={css['label-form']}>Number</label>
          <input
            type="tel"
            name="number"           
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            className={css['input-form']}
          />
        </div>
          
          
          <button type="submit" className={css['btn-form']}>Add contact</button>
        </form>)
}
}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,      
}