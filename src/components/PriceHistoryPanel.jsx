import { Box } from '@mui/material';
import { useState } from 'react';
import LineGraph from '../components/Portfolio/LineGraph';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';

const PriceHistoryPanel = ({ symbol }) => {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box marginY={5}>
      <AntTabs
        variant="scrollable"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ marginBottom: 2 }}>
        <AntTab label="5D" />
        <AntTab label="1M" />
        <AntTab label="6M" />
        <AntTab label="1Y" />
        <AntTab label="2Y" />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <LineGraph symbol={symbol} timeFrame={5} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LineGraph symbol={symbol} timeFrame={30} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LineGraph symbol={symbol} timeFrame={180} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <LineGraph symbol={symbol} timeFrame={365} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <LineGraph symbol={symbol} timeFrame={730} />
      </TabPanel>
    </Box>
  );
};

export default PriceHistoryPanel;
