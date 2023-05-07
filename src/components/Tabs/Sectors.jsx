import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { LOCAL, REMOTE } from '../../utils/routes';
import CircularLoading from '../Loading/CircularLoading';

const SectorTab = () => {
  const { data, error, isLoading } = useData(REMOTE.STOCKS, ['sectors']);

  return error ? (
    <h1>Error Occured</h1>
  ) : isLoading ? (
    <CircularLoading />
  ) : (
    <>
      {data?.data?.map((sector, idx) => {
        return (
          <Button key={idx} component={Link} to={`${LOCAL.SECTORS}/${sector?.name}`}>
            {sector.name.slice(6, sector.length)}
          </Button>
        );
      })}
    </>
  );
};

export default SectorTab;
