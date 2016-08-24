var React = require('react');
var ReactDOM = require('react-dom');

//step 4 : build the card 
var Card = function(props){
    return (
         <div className="card">
            {props.text} 
        </div>
    );
};
// Step 3 : Build the lists that has title and has content dynamic
var List = function(props){
    var cardsArr = [];
    var myCards = props.cards.map(function(val, index){
            for(var i = 0; i<= props.cards.length; i++){
             return(<Card text={props.cards[i].listCards[index]} />);
            }
    });
        // var cardsArr = [];
        // for(var i = 0; i<= 3; i++){
        //     for(var j=0; j<= 3; j++){
        //       cardsArr.push(<Card text={data[i].listCards[j]} />);
        //     }
        //     }
    //  var myCards = state.cards.map(function(val, index){
    //     for(var i = 0; i<= 3; i++){
    //       return <Card text={state.cards[i].listCards[index]} />;
    //     }
    // });
    return (
        <div className="list">
         <div className="list-title">{props.title}</div>
        {myCards}
        </div>
    );
};

//STEP 2 : build the Board woth title and with lists
=======
var trello = ['france', 'Usa', 'mexico', 'colombia']
var cities = ['York', 'New York', 'Baltimore', 'Washington']
var states = ['Virginia', 'Florida', 'New York', 'Washington']



var Board = function(props){
    var myLists = props.lists.map(function(val, index){
        return <List title={props.lists[index].listTitle} cards={data} />
    });
   //  var myLists = [];
   // for (var i=0; i<props.lists.length; i++) {
   //      myLists.push(<List title={props.lists[i].listTitle} cards={props.lists[i].listCards} />);
   //  }
    return (
        <div className="Board">
        <div className="board-title">
        {props.title}
          </div>
        <div className="board-list">{myLists}</div>
        </div>

    );
};


var data = [
    {
        "listTitle" : "Autos",
        "listNumber" : 0,
        "listCards" : ["Honda", "BMW", "Porsche"]
    },
    {
       "listTitle" : "Fruit",
        "listNumber" : 1,
        "listCards" : ["apple", "banana", "berries"]
    },
    {
        "listTitle" : "Countries",
        "listNumber" : 2,
        "listCards" : ["Mexico", "China", "USA"]
    }
];
=======
var List = React.createClass({
	render: function() {
 		var messages = [];
		for(var i = 0; i <= this.props.cards.length; i++) {
			messages.push(<Card message={this.props.cards[i]} />);	
		};		
>>>>>>> a6316837fba18b5840647b805be5f444eabf6d0c




<<<<<<< HEAD


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Hello Board!" lists={data}/> , document.getElementById('app'));
});
=======
			</div>				
		);
	}
});
// var title = ['Countries', 'Cities', 'States' ];
var Board = React.createClass({
	getInitialState: function() {
		return {
			titles:['Countries', 'Cities', 'States'],
			lists:[trello, cities, states]
		};
	},
	render: function() {
		var list = [];
		for(var i = 0; i < this.state.lists.length; i++) {
			list.push(<List title={this.state.titles[i]} cards={this.state.lists[i]} />);
		};
		return (
			<div className="board">
	
				{list}
			
			</div>
		);
	}
});


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});
>>>>>>> a6316837fba18b5840647b805be5f444eabf6d0c
