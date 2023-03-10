import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction='row'
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
      zIndex: '1000',
    }}
  >
    <Link to='/ptube' style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src='https://cdn2.iconfinder.com/data/icons/social-aquiocons/512/Aquicon-Youtube.png'
        alt='logo'
        height={45}
      />
      <Typography variant='h4' color='#fff'>
        PTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
