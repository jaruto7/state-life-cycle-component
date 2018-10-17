'use strict';

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('Wykonuje sie tuz przed metoda render');
    },

    componentDidMount: function() {
        console.log('Pokazuje komponenty na stronie');
    },

    componentWillReceiveProps: function() {
        console.log('Wykonuje sie gdy dostanie nowe propsy');
    },

    shouldComponentUpdate: function() {
        console.log('Sprawdza czy przerysowuje komponent');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Przygotowuje nadchodzace uaktualnienia');
    },

    componentDidUpdate: function() {
        console.log('Wyswietla zaktualizowany komponent');
    },

    componentWillUnmount: function() {
        console.log('Usuwa niepotrzebne komponenty');
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('div', {className: 'counter'},
                    React.createElement('button', {className: 'btn-up', onClick: this.increment}, '+'),
                    React.createElement('div', [], 'Counter: ' + this.state.counter),
                    React.createElement('button', {className: 'btn-down', onClick: this.decrement}, '-'),
                )
            )
        );
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);

ReactDOM.render(element, document.getElementById('app'));