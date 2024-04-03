const axios = require('axios');

const options = {
    method: 'POST',
    url: 'https://linkedin-data-scraper.p.rapidapi.com/person',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '389b3a3fdemsh2667f003e35eebap14f6fcjsnb3a49855733e',
      'X-RapidAPI-Host': 'linkedin-data-scraper.p.rapidapi.com'
    },
    data: {
      link: 'https://www.linkedin.com/in/millikass/'
    }
  };

// Encapsulate the request in an async function
async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data.data.skills);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchData();
