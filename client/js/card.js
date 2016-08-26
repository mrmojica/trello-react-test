var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props){
    return (

        <div className = "card">
            <div className="card-message">{props.message}</div>
        </div>

    );
};

module.exports = Card;