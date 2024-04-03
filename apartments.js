const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://apartments-com1.p.rapidapi.com/properties',
  params: {
    location: 'Fort Lauderdale',
    minRent: '1000',
    minBed: '1',
    maxRent: '2000',
    page: '2',
    maxBed: '3',
    maxBath: '3',
    minBath: '1',
    sort: 'default'
  },
  headers: {
    'X-RapidAPI-Key': '389b3a3fdemsh2667f003e35eebap14f6fcjsnb3a49855733e',
    'X-RapidAPI-Host': 'apartments-com1.p.rapidapi.com'
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

fetchData();