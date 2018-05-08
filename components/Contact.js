var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},

	render: function() {
		return (
			React.createElement('div', {className: 'contactItem'},
				React.createElement('img', {
					className: 'contactImage',
					src: 'https://image.flaticon.com/icons/svg/14/14206.svg'
				}),
				React.createElement('p', {className: 'contactLabel'}, 'First Name: ' + this.props.item.firstName),
				React.createElement('p', {className: 'contactLabel'}, 'Last Name: ' + this.props.item.lastName),
				React.createElement('a', {className: 'contactEmail', href: 'mailto' + this.props.item.email}, this.props.item.email)
			)
		)
	}
});