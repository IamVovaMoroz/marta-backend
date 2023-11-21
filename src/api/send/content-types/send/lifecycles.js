module.exports = {
	async afterCreate(event) {
		const { result } = event;
		try {
			await strapi.plugins["email"].services.email.send({
        to: "antipin.m9971@gmail.com",
				from: "antipin.m9971@gmail.com",
				subject: 'You have a new custumer',
		text: `Your custumer is ${result.name}, email: ${result.mail}`
      });
		} catch (error) {
			console.log(error)
		}
	}
}