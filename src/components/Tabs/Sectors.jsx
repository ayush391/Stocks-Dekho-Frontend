import { useState } from 'react';
import useAllSectors from '../../hooks/StockHooks/useAllSectors';
import CircularLoading from '../Loading/CircularLoading';
import { AntTab } from './AntTab';
import { AntTabs } from './AntTabs';
import SectorStocks from './SectorStocks';
import { TabPanel } from './TabPanel';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
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
      
        {sectorData.map((sector, idx) => {
          return (
            // <AntTab
            //   key={idx}
            //   iconPosition="top"
            //   // icon={<TrendingUp color="success" />}
            //   label={sector.name.slice(6, sector.length)}
              
            // />
            <Button component={Link} to={"/SectorPage/"+sector?.name}>{sector.name.slice(6, sector.length)}</Button>
          );
        })}
      
      {/* {sectorData.map((sector, idx) => {
        return (
          <TabPanel key={idx} value={value} index={idx}>
            <SectorStocks sectorName={`/${sector.name}`} />
          </TabPanel>
        );
      })} */}
    </div>
  );
};
