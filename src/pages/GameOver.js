import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import { useHistory } from "react-router-dom"; // Import useHistory

const GameOver = () => {
  const dispatch = useDispatch(); // Corrected assignment
  const history = useHistory(); // Initialize useHistory
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    history.push("/");
  };

  return (
    <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined">
        Back To Settings!
      </Button>
    </Box>
  );
};

export default GameOver;