import { Container, Typography, useTheme } from '@mui/material';

function Etusivu(props) {

    const tyylit = useTheme();

return (
    <Container>
        
    <Typography style={tyylit.otsikkoEtusivu}>Tervetuloa!</Typography>
    <Typography style={tyylit.alaotsikkoEtusivu}>
        Täältä löydät erilaisia postimerkkejä. 
        Pääset vauhtiin vasemman yläkulman valikosta.
    </Typography>
   
    </Container>
);
}

export default Etusivu;
  