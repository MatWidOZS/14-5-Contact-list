var contacts = [
	{
		id: 1,
		firstName: 'Jacob',
		lastName: 'Ward',
		email: 'jacob.ward@example.com'
	},
	{
		id: 2,
		firstName: 'Joseph',
		lastName: 'Phillips',
		email: 'joseph.phillips@example.com'
	},
	{
		id: 3,
		firstName: 'Owen',
		lastName: 'Banks',
		email: 'owen.banks@example.com'
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		);
	}
});