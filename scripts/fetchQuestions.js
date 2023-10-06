


const axios = require('axios');
const fs = require('fs'); // Import the fs module to write the data to a file

const apiUrl = 'https://opentdb.com/api.php?amount=30&category=10&difficulty=medium&type=multiple';

const fetchQuestions = async () => {
  try {
    const response = await axios.get(apiUrl);
    const questions = response.data.results;

    fs.writeFileSync('questions.json', JSON.stringify(questions, null, 2));

    console.log('Questions fetched and saved to questions.json');
  } catch (error) {
    console.error('Error fetching questions:', error);
  }
};

fetchQuestions();