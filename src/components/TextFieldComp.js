import { FormControl, TextField } from "@mui/material"; // Change TextFieldComp to TextField
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux"; // Import useDispatch
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => { // Change function name to match component name
    const dispatch = useDispatch(); // Use useDispatch (correct case)

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    };

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type="number"
                    size="small"
                />
            </FormControl>
        </Box>
    );
}

export default TextFieldComp