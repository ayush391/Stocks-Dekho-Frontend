import { useState } from 'react';
import useAllSectors from '../hooks/StockHooks/useAllSectors';
import CircularLoading from '../components/Loading/CircularLoading';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import SectorStocks from '../components/Tabs/SectorStocks';
import { TabPanel } from '../components/Tabs/TabPanel';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
const SectorPage = () => {
  const { sectorData, error, loading } = useAllSectors();

  //panel
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return error ? (
    <h1>Error Occured</h1>
  ) : loading ? (
    <CircularLoading />
  ) : (
    <Container maxWidth="sm">
      <AntTabs variant="scrollable" onChange={handleChange}>
        {sectorData.map((sector, idx) => {
          return (
            <AntTab
              key={idx}
              iconPosition="top"
              // icon={<TrendingUp color="success" />}
              label={sector.name.slice(6, sector.length)}
            />
            // <Button component={Link} to={"/SectorPage/"+sector?.name}>{sector.name.slice(6, sector.length)}</Button>
          );
        })}
      </AntTabs>

      {sectorData.map((sector, idx) => {
        return (
          <TabPanel key={idx} value={value} index={idx}>
            <SectorStocks sectorName={`/${sector.name}`} />
          </TabPanel>
        );
      })}
    </Container>
  );
};

export default SectorPage;
