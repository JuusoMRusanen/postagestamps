import { Box, Container, Typography, useTheme } from '@mui/material';

function Etusivu(props) {

    const tyylit = useTheme();

return (
    <Container style={tyylit.etusivuKontti} >
        <Box style={tyylit.etusivuTekstit} >
            <Typography style={tyylit.otsikkoEtusivu}>Tervetuloa!</Typography>
            <Typography style={tyylit.alaotsikkoEtusivu}>
                Täältä löydät erilaisia postimerkkejä. 
                Pääset vauhtiin vasemman yläkulman valikosta.
            </Typography>
        </Box>
    </Container>
);
}

export default Etusivu;
  