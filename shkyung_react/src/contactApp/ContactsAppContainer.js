import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import ContactsApp from './ContactsApp'

class ContactsAppContainer extends Component {
    constructor() {
        super();
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch("./contacts.json", {
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        }})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ contacts: responseData });
            })
            .catch((error) => {
                console.log("Error fetching and parsing data", error);

            });
    }

    render() {
        return (
            <ContactsApp contacts={this.state.contacts} />
        );
    }
}

render(<ContactsAppContainer />, document.getElementById("root"));