import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ContactItem extends Component {
	render() {
		return <li>{this.porps.name} - {this.props.email}</li>
	}
}

ContactItem.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired
}