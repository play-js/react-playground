import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactsApp extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ContactList contacts={this.props.contacts} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Avramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somehwere.com" },
    { name: "Paul O'Shannessy", email: "zpao@somehwere.com" },
    { name: "Ryan Florence", email: "rpflorence@somehwhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
]

render(<ContactsApp contacts={contacts} />, document.getElementById("root"));