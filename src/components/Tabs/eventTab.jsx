import { Button } from '@mui/material';
import './portfolioTab.css';
import { Divider } from '@mui/material';
const EventTab = () => {
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
        <Button onClick={() => alert('no new Event')}>learn more</Button>
      </div>
    </div>
  );
};
export default EventTab;
