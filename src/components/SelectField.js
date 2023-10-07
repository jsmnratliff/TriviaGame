import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { handleCategoryChange } from '../redux/actions';

const SelectField = (props) => {
  const { label, options } = props;
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    switch(label) {
        case "Category";
        dispatchEvent(handleCategoryChange(e.target.value));
        break;
        case "Difficulty";
        dispatchEvent(handleDifficultyChange(e.target.value));
        break;
        case "Type";
        dispatchEvent(handleTypeChange(e.target.value));
        break;
    default:
        return;
    }
  };

  return (
    <Box mt={3} width="100">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
         {options.map(({id, name}) => (
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
