function getListOfTweetIds(tweets) { //接受一个推文的对象，返回推文ID的列表。
	return Object.keys(tweets);
}
module.exports.getListOfTweetIds = getListOfTweetIds;