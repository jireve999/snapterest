//需要告诉Jest不去模拟TweetUtils模块
jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function() {
	it('returns an array of tweet ids', function() {
		//Jest会自动模拟require函数引用的模块，这里需要手动执行
		var TweetUtils = require('../TweetUtils');

		var tweetsMock = {
			tweet1: {},
			tweet2: {},
			tweet3: {}
		};
		var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
		var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

		expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds); //深度比较，适合数组
	});
});