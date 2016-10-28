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
	componentWillReceiveProps: function(nextProps) {
		console.log('[Snapterest] StreamTweet: 4.Running componentWillReceiveProps()');

		var currentTweetLength = this.props.tweet.text.length;
		var nextTweetLength = nextProps.tweet.next.length;
		var isNumberOfCharactersIncreasing = (nextTweetLength > Current);
		var headerText;

		this.setState({
			numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
		});

		if (isNumberOfCharactersIncreasing) {
			headerText = 'Number of characters is increasing';
		} else {
			headerText = 'Latest public photo from Twitter';
		}

		this.setState({
			headerText: headerText
		});

		window.snapterest.numberOfReceivedTweet++;
	},
	shouldComponentUpdate: function(nextProps, nextState) { //阻止显示下一条内容少于一个字符的推文
		console.log('[Snapterest] StreamTweet: 5.Running shouldComponentUpdate()');

		return (nextProps.tweet.text.length > 1);
	},
	componentWillUpdate: function(nextProps, nextState) {
		console.log('[Snapterest] StreamTweet: 6.Running componentWillUpdate()');
	},
	componentDidUpdate: function(prevProps, prevState) { //全局对象中增加已显示推文的数量
		console.log('[Snapterest] StreamTweet: 7.Running componentDidUpdate()');
		window.snapterest.numberOfDisplayedTweets++;
	},
	componentWillUnmount: function() {
		console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

		delete window.snapterest;
	},
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

module.exports = SteamTweet;