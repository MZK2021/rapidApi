const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://real-time-finance-data.p.rapidapi.com/search',
  params: {
    query: 'Apple Inc',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': '389b3a3fdemsh2667f003e35eebap14f6fcjsnb3a49855733e',
    'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
  }
};
async function fetchData() {
try {
	const response = await axios.request(options);
	console.log(response.data.data);
} catch (error) {
	console.error(error);
}
}

fetchData()