import React, { Component } from 'react';

class CheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((task) => (
			<li className="checklist_task">
				<input type="checkbox" defaultChecked={task.done} />
				{task.name}
			</li>
		));

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
			</div>
		);
	}
}

export default CheckList;