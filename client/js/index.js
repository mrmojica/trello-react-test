var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
	// Card.defaultProps = {
	// 		message : "This is a default message"
	// 	}
	return (

		<div className = "card">
			<div className="card-message">{props.message}</div>
		</div>

	);
};

var trello = ['france', 'usa', 'mexico', 'colombia']

var List = React.createClass({
	render: function() {
		var messages = [];
		for(var i = 0; i <= trello.length; i++) {
				messages.push(<Card message={trello[i]} />);
		};
		return (
			<div className="list">
			<div className="list-title" titleClass="orange">{this.props.title}</div>

 				{messages}

			</div>				
		);
	}
});
var title = ['Countries', 'Cities', 'States' ];
var Board = React.createClass({
	render: function() {
		var list = [];
		for(var i = 0; i < this.props.everything.length; i++) {
			list.push(<List title={this.props.everything[i]} />);
		};
		return (
			<div className="board">
	
				{list}
			
			</div>
		);
	}
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board everything={title} />, document.getElementById('app'));
});
