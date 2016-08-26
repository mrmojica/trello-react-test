var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../client/js/card');
var List = require('../client/js/list');

describe('List component', function() {
    it('Renders the list component',  function() {
        // var message = ["hello wolrd", "apple"];
        var message = ["hello wolrd", "apple", "oranges"];
        var renderer = TestUtils.createRenderer();
        renderer.render(<List title="myList" cards={message} onSubmit={null} textValue={null} onInputChanged={null} />);
        // console.log(<List cards={message} />);
        var result = renderer.getRenderOutput();
        var title = result.props.children[0];
        // console.log(title);
        title.type.should.equal('div');
        title.props.className.should.equal("list-title");
        var cards = result.props.children[1];
        // Card.props.message.should.be.an("array");
        cards[0].props.message.should.equal("hello wolrd");
        cards[1].props.message.should.equal("apple");
        cards[2].props.message.should.equal("oranges");
        cards.length.should.equal(3);
        console.log(cards);
    });
});