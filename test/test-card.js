var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../client/js/card');

describe('Card component', function() {
    it('Renders the message',  function() {
        var message = "hello world";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Card message={message} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('card');

        console.log(<Card message={message} />);
        var div = result.props.children;
        console.log(div);
        div.type.should.equal('div');
        div.props.className.should.equal("card-message");
        div.props.children.should.be.a('string');
        div.props.children.should.equal(message);

    });
});