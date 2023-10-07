import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions'; // Import action creators

const SelectField = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from react-redux

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);

    // Use a switch statement to dispatch the appropriate action based on the label
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(selectedValue));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(selectedValue));
        break;
      case "Type":
        dispatch(handleTypeChange(selectedValue));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectField;