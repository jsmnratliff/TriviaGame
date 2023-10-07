import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import TextFieldComp from "./TextFieldComp";
import SelectField from "./SelectField";
import useAxios from "../hooks/useAxios";
import { useState } from "react"; // Import useState

const HomePage = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useHistory();

  const [selectedCategory, setSelectedCategory] = useState(''); // Manage selected category
  const [selectedDifficulty, setSelectedDifficulty] = useState(''); // Manage selected difficulty
  const [selectedType, setSelectedType] = useState(''); // Manage selected type

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectField
        options={response.trivia_categories}
        label="Category"
        value={selectedCategory} // Set selected value
        onChange={(e) => setSelectedCategory(e.target.value)} // Handle change
      />
      <SelectField
        label="Difficulty"
        value={selectedDifficulty} // Set selected value
        onChange={(e) => setSelectedDifficulty(e.target.value)} // Handle change
      />
      <SelectField
        label="Type"
        value={selectedType} // Set selected value
        onChange={(e) => setSelectedType(e.target.value)} // Handle change
      />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          LessGo
        </Button>
      </Box>
    </form>
  );
};

export default HomePage;