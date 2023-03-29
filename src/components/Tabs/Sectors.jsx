import { useState } from 'react';
import useAllSectors from '../../hooks/StockHooks/useAllSectors';
import CircularLoading from '../Loading/CircularLoading';
import { AntTab } from './AntTab';
import { AntTabs } from './AntTabs';
import SectorStocks from './SectorStocks';
import { TabPanel } from './TabPanel';

export const SectorTab = () => {
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
    <div>
      <AntTabs variant="scrollable" value={value} onChange={handleChange} allowScrollButtonsMobile>
        {sectorData.map((sector, idx) => {
          return (
            <AntTab
              key={idx}
              iconPosition="top"
              // icon={<TrendingUp color="success" />}
              label={sector.name.slice(6, sector.length)}
            />
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
    </div>
  );
};
