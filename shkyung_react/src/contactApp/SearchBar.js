import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {
    render() {
        return <input type="search" placeholder="search" value={this.props.filterText}/>
    }
}

SearchBar.propTypes = {
    filterText: PropTypes.string.isRequired
}

export default SearchBar; 