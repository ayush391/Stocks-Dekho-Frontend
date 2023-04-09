import { Container } from '@mui/material';
import { useState } from 'react';
import CircularLoading from '../components/Loading/CircularLoading';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import SectorStocks from '../components/Tabs/SectorStocks';
import { TabPanel } from '../components/Tabs/TabPanel';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';

const SectorPage = () => {
  const { data, error, isLoading } = useData(REMOTE.STOCKS, ['sectors']);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sectorData = data?.data;

  return error ? (
    <h1>Error Occured</h1>
  ) : isLoading ? (
    <CircularLoading />
  ) : (
    <Container maxWidth="sm">
      <AntTabs variant="scrollable" onChange={handleChange}>
        {sectorData?.map((sector, idx) => {
          return (
            <AntTab key={idx} iconPosition="top" label={sector.name.slice(6, sector.length)} />
          );
        })}
      </AntTabs>

      {sectorData?.map((sector, idx) => {
        return (
          <TabPanel key={idx} value={value} index={idx}>
            <SectorStocks sectorName={sector.name} />
          </TabPanel>
        );
      })}
    </Container>
  );
};

export default SectorPage;
