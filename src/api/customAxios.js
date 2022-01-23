var axios = require('axios');

const customAxios = axios.create({
	baseURL: 'https://api.anonfiles.com',
	headers: {
		common: {
		  "Content-Type": 'multipart/form-data'
		}
	  }
})

module.exports = customAxios;