module.exports = async() => {
	const data = require('./db/index.js');
	return data().then( (users) => {
		let filter = users.filter((user) => {
    		return user.salary >= 500;
		});
		let results = [];
		filter.forEach(user => { 
			results.push(user.forename + ' ' + user.surname); 
		}); 
		return results;
	});
};
