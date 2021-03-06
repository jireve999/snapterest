var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');

var CollectionControls = React.createClass({
	getInitialState: function() {
		return {
			name: 'new',
			isEditingName: false
		};
	},

	getHeaderText: function() {
		var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection; //存储集合中推文的数量
		var text = numberOfTweetsInCollection;

		if (numberOfTweetsInCollection === 1) {
			text = text + ' tweet in your';
		} else {
			text = text + ' tweets in your';
		}

		return (
			<span>
				{text} <strong>{this.state.name}</strong> collection
			</span>
		);
	},

	toggleEditCollectionName: function() {
		this.setState({
			isEditingName: !this.state.isEditingName
		});
	},

	//用户提交新集合名称时调用
	setCollectionName: function(name) {
		this.setState({
			name: name,
			isEditingName: false
		});
	},

	render: function() {
		if (this.state.isEditingName) {
			return (
				<CollectionRenameForm 
					name = {this.state.name}
					onChangeCollectionName = {this.setCollectionName}
					onCancelCollectionNameChange = {this.toggleEditCollectionName}
				/>
			);
		}

		return (
			<div>
				<Header text={this.getHeaderText()} />

				<Button
					label="Rename collection"
					handleClick={this.toggleEditCollectionName} />

				<Button
					label="Empty collection"
					handleClick={this.props.onRemoveAllTweetsFromCollection} />

				<CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
			</div>
		);
	}
});

module.exports = CollectionControls;