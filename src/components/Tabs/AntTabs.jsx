import styled from '@emotion/styled';
import { Tabs } from '@mui/material';

export const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    display: 'none',
    backgroundColor: '#1890ff'
  }
});
