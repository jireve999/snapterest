var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var SteamTweet = React.createClass({
	getInitialState: function() {
		console.log('[Snapterest] StreamTweet: 1.Running getInitialState()');
		return {
			numberOfCharactersIsIncreasing: null, //监测下一条将要被显示的推文是否比当前显示的推文有更多的字符。
			headerText: null //存储StreamTweet渲染Header组件时所需要的文本
		}
	},
	componentWillMount: function() {
		console.log('[Snapterest] StreamTweet:2.Running componentWillMount()');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from Twitter'
		});
		window.snapterest = {
			numberOfReceivedTweet: 1, //记录所有接受的推文数量
			numberOfDisplayedTweets: 1 //记录所有显示的推文数量
		}
	},
	componentDidMount: function() {
		console.log('[Snapterest] StreamTweet: 3.Running componentDidMount()');

		var componentDOMRepresentation = ReactDOM.findDOMNode(this);
		window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML; //<Header />组件DOM
		window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outherHTML; //<Tweet />组件DOM
	},
	componentWillUnmount: function() {
		console.log('[Snapterest] StreamTweet: 8.Running componentWillUnmount()');

		delete window.snapterest;
	}
	render: function() {
		console.log('[Snapterest] StreamTweet: Running render()');

		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet 
					tweet={this.props.tweet}
					onImageClick={this.props.onAddTweetToCollection} />
			</section>
		);
	}
});

module.export = SteamTweet;