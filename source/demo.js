var React = require('react');
var ReactDOM = require('react-dom');

// var listOfItems = <ul className="list-of-items">
//                    <li className="item-1">Item 1</li>
//                    <li className="item-2">Item 2</li>
//                    <li className="item-3">Item 3</li>
//                   </ul>;
// var reactElement = React.createElement('h1');
// var h1 = React.createElement('h1', {
// 	className: 'header',
// 	key: 'header'
// }, 'This is React');
// var p = React.createElement('p', {
// 	className: 'content',
// 	key: 'content'
// }, "And that's how it works");
// var reactFragement = [h1, p];
// var section = React.createElement('section', {
// 	className: 'container'
// }, reactFragement);
// 
// 创建一个无状态组件
// var ReactClass = React.createClass({
// 	render: function() {
// 		// var elementStat = {
// 		// 	isHidden: true
// 		// };
// 		if (this.props.isHidden) {
// 			return null;
// 		}
// 		var header = this.props.tweets.length + ' Latest Tweets';
// 		return React.createElement('h1', {
// 			className: 'header'
// 		}, header);
// 	}
// });

// var reactComponentElement = React.createElement(ReactClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));
// 
// 
// // 创建一个有状态组件
// var ReactClass = React.createClass({
getInitialState: function() {
		return {
			isHeaderHidden: false
		};
	},

	handleClick: function() {
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		});
	},

	render: function() {
		var title = 'Stateful React Component';
		var headerElement = React.createElement('h1', {
			className: 'header',
			key: 'header'
		}, title);
		var buttonElement = React.createElement('button', {
			className: 'btn btn-default',
			onClick: this.handleClick,
			key: 'button'
		}, 'Toggle header');

		if (this.state.isHeaderHidden) {
			return React.createElement('div', null, [buttonElement]);
		}

		return React.createElement('div', null, [buttonElement, headerElement]);
	}
});


var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));