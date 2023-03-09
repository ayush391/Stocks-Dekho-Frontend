import styled from "@emotion/styled";
import { Tab } from "@mui/material";

export const AntTab = styled(Tab)({
    fontSize: '0.7rem',
    borderRadius: '10px',
    // padding: '1rem',
    '&.Mui-selected': {
        backgroundImage: 'linear-gradient(0deg,#73b9ff30,#73b9ff00)',
    },
});