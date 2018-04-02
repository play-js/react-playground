import React, { Component } from 'react';
import CheckList from './CheckList';
import marked from 'marked'
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        };
    }

    toggleDetails() {
        this.setState({ showDetails: !this.state.showDetails });
    }

    render() {
        let cardDetails;

        if (this.state.showDetails) {
            cardDetails = (
                <div className={"card_details"}>
    			<span dangerouslySetInnerHTML={{__html:marked(this.props.desc)}} />
					<CheckList cardId={this.props.id} tasks={this.props.tasks} />
				</div>
            );
        }
        return (
            <div className="card">
			 	<div className={this.state.showDetails ? "card_title card_title--is-open" : "card_title"} 
			 	onClick={this.toggleDetails.bind(this)}>
			 		{this.props.title}
			 	</div>
				{cardDetails}
			</div>
        );
    }
}

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
}

export default Card;