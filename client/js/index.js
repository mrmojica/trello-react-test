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






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="Hello Board!" lists={data}/> , document.getElementById('app'));
});