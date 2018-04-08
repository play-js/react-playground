import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends Component {
    constructor() {
        super();
        this.state = {
            filterText: ""
        }
    }

    handleUserInput(searchTerm) {
          console.error("search bar on User input");
        this.setState({ filterText: searchTerm })
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} 
                            onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;