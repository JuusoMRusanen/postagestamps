import {useState} from 'react';
import {AppBar, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Valikko(props) {

  const tyylit = useTheme();

  const [ankkuri, setAnkkuri] = useState(null);

  const suljeMenu = () => {
      setAnkkuri(null);
  }

  return (
    <AppBar position="static" style={tyylit.appBar}>
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={ (e) => { setAnkkuri(e.currentTarget)} }>
            <MenuIcon/>
        </IconButton>
        <Menu open={Boolean(ankkuri)} anchorEl={ankkuri} onClose={suljeMenu}>
          
            <MenuItem
              style={tyylit.menuItem}
              component={Link}
              to="./Etusivu"
              onClick={ (e) => { 
                  suljeMenu()} }
            >Etusivu</MenuItem>

            <MenuItem
              style={tyylit.menuItem}
              component={Link}
              to="./Selaa"
              onClick={ (e) => { 
                  suljeMenu()} }
            >Selaa</MenuItem>
        </Menu>
        <Typography variant="h5" style={tyylit.appBarOtsikko}>Postimerkkikokoelma</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Valikko;
