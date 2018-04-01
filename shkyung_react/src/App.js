import React from 'react';
import KanbanBoard from './KanbanBoard';

// using markdown
let cardsList = [{
        id: 1,
        title: "Read the Book",
        desc: "I should read the **whole** book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        desc: "Code along with the samples in the book. <br> The complete source can be found at [github](http://github.com/pro-react)",
        status: "todo",
        tasks: [{
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    }
];

class App extends React.Component {
    render() {
        return <KanbanBoard cards={cardsList} / >
    }
}

export default App;