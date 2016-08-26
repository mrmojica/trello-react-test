var React = require('react');
var ReactDOM = require('react-dom');
var Card = require("./card");

var List = function(props) {
        var messages = [];
        for(var i = 0; i < props.cards.length; i++) {
            messages.push(<Card message={props.cards[i]} />);  
        };      

        return (
            <div className="list">
            <div className="list-title">{props.title}</div>

                {messages}
         
            <form onSubmit={props.onSubmit}>
                <input type="text" value={props.textValue}  placeholder="Add Something" onChange={props.onInputChanged} />
                <button type="submit">click me</button>
            </form>
       
            </div>              
        );
    }

 module.exports = List;