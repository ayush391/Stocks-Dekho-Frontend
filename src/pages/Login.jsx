import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import React from 'react';
import { LoginComponent } from '../components/LogComponent';
import { SignUp } from '../components/SignUpComponent';

export const LoginPage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        width: '30%',
        minWidth: 250,
        marginRight: 'auto',
        marginLeft: 'auto',
        border: '1px solid',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
      }}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="LogIn" value="1" />
              <Tab label="SignUp" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <LoginComponent />
          </TabPanel>
          <TabPanel value="2">
            <SignUp />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
