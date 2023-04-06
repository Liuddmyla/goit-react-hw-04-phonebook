import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
    return (<>{name}: {number}
    <button type="button" onClick={deleteContact} id={id} className={css['btn-delete']}>Delete</button>
    </>)
}

ContactListItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,    
}