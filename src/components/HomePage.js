import {Button} from '@mui/material';
import {Box} from '@mui/system';
import SelectField from '../components/SelectField';

const Settings = () => {
    return (
        <form>
            <SelectField label="Category" />
            <SelectField label="Difficulty" />
            <SelectField label="Type" />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    LessGo
                </Button>
            </Box>
        </form>
    );
};

export default Settings;