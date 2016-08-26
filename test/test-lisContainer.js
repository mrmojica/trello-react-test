var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../client/js/card');
var List = require('../client/js/list');
var ListContainer = require('../client/js/listcontainer');

describe.only('ListContainer component', function() {
    it('Renders the ListContainer component',  function() {
       var list = [
            {
                title: 'My Food',
                cards: ['apples', 'banana'],
   
            }
        ]
        var renderer = TestUtils.createRenderer();
        for(var i = 0; i < list.length; i++) {
            renderer.render(<ListContainer title={list[i].title} cards={list[i].cards} text='' />);
          console.log(<ListContainer title={list[i].title} cards={list[i].cards} text="" />);
        

        }
        console.log(<ListContainer />)
        
        // console.log(<List cards={message} />);
        var result = renderer.getRenderOutput();

        result.props.title.should.be.a("string");
        result.props.title.should.equal("My Food");
        console.log(result);
        // result.props.cards.should.be.a("array");
        // result.props.cards[0].should.equal("apples");
        // result.props.cards[1].should.equal("banana");

    });
});