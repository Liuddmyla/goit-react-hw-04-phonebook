import PropTypes from 'prop-types';
import { ContactListItem } from "../contactListItem/ContactListItem";

export const ContactList = ({visibleContacts, deleteContact}) => {
    return (
        <ul>
            {(visibleContacts).map(contact => ( 
                <li key={contact.id}>                    
                    <ContactListItem name={contact.name} number={contact.number} id={contact.id} deleteContact={deleteContact} />
                </li>  
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})),
    deleteContact: PropTypes.func.isRequired,   
}