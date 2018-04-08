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

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} />
                <ContactList contacts={this.props.contacts} filterText={this.state.filterText} />
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