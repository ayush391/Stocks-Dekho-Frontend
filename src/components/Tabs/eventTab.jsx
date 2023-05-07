import { Button } from '@mui/material';
import './portfolioTab.css';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const EventTab = () => {
  const navigate = useNavigate();
  return (
    <div style={{ flexShrink: 0, minWidth: 'sm', overflowX: 'auto' }}>
      <br></br>
      <div className="background-image">
        <h1 style={{ fontSize: '29', fontWeight: 'bolder', textAlign: 'center' }}>
          {' '}
          Check New Events
          <br></br>
        </h1>
        <Divider />
        <Button onClick={() => navigate('/Events')}>learn more</Button>
      </div>
    </div>
  );
};
export default EventTab;
