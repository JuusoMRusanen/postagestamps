import {useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Valikko(props) {

    const [ankkuri, setAnkkuri] = useState(null);

    const suljeMenu = () => {
        setAnkkuri(null);
    }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={ (e) => { setAnkkuri(e.currentTarget)} }>
            <MenuIcon/>
        </IconButton>
        <Menu open={Boolean(ankkuri)} anchorEl={ankkuri} onClose={suljeMenu}>
          
            <MenuItem 
              component={Link}
              to="./Etusivu"
              onClick={ (e) => { 
                  suljeMenu()} }
            >Etusivu</MenuItem>

            <MenuItem 
              component={Link}
              to="./Selaa"
              onClick={ (e) => { 
                  suljeMenu()} }
            >Selaa</MenuItem>
        </Menu>
        <Typography variant="h5">Postimerkkikokoelma</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Valikko;
