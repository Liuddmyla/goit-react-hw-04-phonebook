import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, filterChange }) => {
    return (
        <>
        <p className={css['text-filter']}>Find contacts by name</p>
        <input
          type="text"
          name="name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={filterChange}
          className={css['input-filter']}
        /> 
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,   
}