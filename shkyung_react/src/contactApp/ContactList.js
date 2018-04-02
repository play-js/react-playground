import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ContactList extends Component {
    render() {
        return (
            <ul>
				{this.props.contacts.map((contact) => <ContactItem key={contact.email}
																	name = {contact.name}
																	email={contact.email} /> 
										)}
			</ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}