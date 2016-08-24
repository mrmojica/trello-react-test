var React = require('react');
var ReactDOM = require('react-dom');



var Card = function(props){
    return (

        <div className = "card">
            <div className="card-message">{props.message}</div>
        </div>

    );
};



var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            title: this.props.title,
            text: "",
            cards: this.props.initialCards,
            textValue: this.props.textValue
        }
    },
    onSubmit: function(e){
        e.preventDefault();
        console.log("button clicked");
        console.log(this.state.text);
        this.setState({
            cards: this.state.cards.concat(this.state.text),
            textValue: ''
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
        <List title={this.state.title} textValue={this.state.textValue} cards={this.state.cards} onSubmit={this.onSubmit} onInputChanged={this.inputChanged} />
        );
    }
});

var List = function(props) {
        var messages = [];
        for(var i = 0; i <= props.cards.length; i++) {
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