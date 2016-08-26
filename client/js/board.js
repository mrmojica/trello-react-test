var React = require('react');
var ReactDOM = require('react-dom');
var ListContainer = require('./Listcontainer')


var Board = React.createClass({

    render: function() {
        var lists = [];
        for(var i = 0; i < this.props.seed.length; i++) {
            lists.push(<ListContainer title={this.props.seed[i].title} initialCards={this.props.seed[i].cards} />);
        };
        return (
            <div className="board">
    
        {lists}            
            </div>
        );
    }
});
var mySeed = [
    {
        title: 'My Food',
        cards: ['apples', 'banana']    
    },
    {
        title: 'My Cars',
        cards : ['BMW', 'toyota']
    }
]


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board seed={mySeed} />, document.getElementById('app'));
});