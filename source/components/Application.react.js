var React = require('react');
var Stream = require('./Stream.react'); //Stream组件将在用户界面中渲染信息流部分
var Collection = require('./Collection.react'); //Collection组件将在用户页面中渲染集合部分

var Application = React.createClass({
	getInitialState: function() {
		return {
			collectionTweets: {}
		};
	},

	//添加一条推文到集合中
	addTweetToCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;

		collectionTweets[tweet.id] = tweet;

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	//从集合中删除特定的推文
	removeTweetFromCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;

		delete collectionTweets[tweet.id];

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	//从集合中删除所有的推文
	removeAllTweetsFromCollection: function() {
		this.setState({
			collectionTweets: {}
		});
	},

	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 text-center">
						<Stream onAddTweetToCollection={this.addTweetToCollection} /> 
					</div>
					<div className="col-md-8">
						<Collection
							tweets={this.state.collectionTweets}
							onRemoveTweetFromCollection={this.removeTweetFromCollection}
							onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
						/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Application;