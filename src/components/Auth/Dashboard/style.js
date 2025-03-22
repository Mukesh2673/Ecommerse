import { styled } from '@mui/material/styles';
import { AppBar, Drawer } from '@mui/material';
import { drawerWidth } from './constants';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#000040',
  color: 'white',
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#000040',
    color: 'white',
  },
}));
