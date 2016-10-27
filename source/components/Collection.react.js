var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = React.createClass({
	createHtmlMarkupStringOfTweetList: function() {
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
		);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	},

	//返回一个推文ID的数组
	getListOfTweeetIds: function() {
		return Object.keys(this.props.tweets);
	},

	//获得推文总数
	getNumberOfTweetsInCollection: function() {
		return this.getListOfTweeetIds().length;
	},

	render: function() {
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

		//集合不为空
		if (numberOfTweetsInCollection > 0) {
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
			var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

			return (
				<div>
					<CollectionControls
						numberOfTweetsInCollection={numberOfTweetsInCollection}
						htmlMarkup={htmlMarkup}
						onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection} />

					<TweetList
						tweets={tweets}
						onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />

				</div>
			);
		}

		return <Header text="Your collection is empty" />;
	}
});

module.exports = Collection;