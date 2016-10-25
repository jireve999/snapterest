var React = require('react');
var Stream = require('./Stream.react'); //Stream组件将在用户界面中渲染信息流部分
var Collection = require('./Collection.react'); //Collection组件将在用户页面中渲染集合部分

var Application = React.createClass({
	getInitialState: function() {
		return {
			collectionTweets: {}
		};
	},

	addTweetToCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;

		collectionTweets[tweet.id] = tweet;

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	removeTweetFromCollection: function(tweet) {
		var collectionTweets = this.state.collectionTweets;

		delete collectionTweets[tweet.id];

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	removeAllTweetFromCollection: function() {
		this.setState({
			collectionTweets: {}
		});
	},

	render: function() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 text-center">
						<Steam onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className="col-md-8">
						<Collection
							tweets={this.state.collectionTweets}
							onRemoveTweetFromCollection={this.removeTweetFromCollection}
							onRemoveAllTweetsFromCollection={this.removeAllTweetFromCollection}
						/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Application;