/**
 * Created by user on 15/12/31.
 */
var React = require('react');
class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
    );
    }
}

module.exports = Hello;