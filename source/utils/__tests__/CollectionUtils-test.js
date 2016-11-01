jest.autoMockOff(); //不要做自动模拟数据，如需要模拟数据，可以为每个模块显式调用jest.mock()方法。
// jest.dontMock('../CollectionUtils');
// jest.dontMock('../TweetUtils');

describe('Collection utilties module', function() {
	var CollectionUtils = require('../CollectionUtils');

	var collectionTweetsMock = {
		collectionTweet7: {},
		collectionTweet8: {},
		collectionTweet9: {}
	};

	it('returns a number of tweets in collection', function getNumberOfTweetsInCollection() {
		var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
		var expectedNumberOfTweetsInCollection = 3;

		expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
	});

	it('checks if collection is not empty', function isNotEmptyCollection() {
		var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

		expect(actualIsEmptyCollectionValue).toBeDefined();
		expect(actualIsEmptyCollectionValue).toBe(false);
		expect(actualIsEmptyCollectionValue).not.toBe(true);
	});
})