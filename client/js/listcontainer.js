var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./list")
var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title,
            text: "",
            cards: this.props.initialCards
        
        }
    },
    onSubmit: function(e){
        e.preventDefault();
        console.log("button clicked");
        console.log(this.state.text);
        this.setState({
            cards: this.state.cards.concat(this.state.text),
            text: ""
        });

    },
    inputChanged: function(e){
        e.preventDefault();
        this.setState({
            text: e.currentTarget.value,

        })
    },

    render: function() {
     return (
        <List title={this.state.title}  textValue={this.state.text} cards={this.state.cards} onSubmit={this.onSubmit} onInputChanged={this.inputChanged} />
        );
    }
});

module.exports = ListContainer;