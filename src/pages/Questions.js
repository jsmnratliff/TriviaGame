import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import useAxios from '../hooks/useAxios';
import { useHistory } from 'react-router-dom';
import { handleScoreChange } from '../redux/actions';
import { decode } from 'html-entities'; // Import decode function

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  let apiUrl = `/api.php?amount=${amount_of_question}`;

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`); // Fix the concatenation
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`); // Fix the concatenation
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`); // Fix the concatenation
  }

  const { response, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        getRandomInt(question.incorrect_answers.length), // Fix the function name
        0,
        question.correct_answer
      );
      setOptions(answers); // Fix the variable name
    }
  }, [response, questionIndex]);

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      history.push('/score');
    }
  };

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
        {decode(response.results[questionIndex].question)}
      </Typography>
      {options.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>Score: {score} / {response.results.length}</Box>
    </Box>
  );
};

export default Questions;