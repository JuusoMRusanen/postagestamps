import { Button, Table, TableBody, TableCell, TableContainer, TableRow, Container, Typography } from "@mui/material";
import postimerkit from './postimerkit';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTheme } from "@mui/material";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

function Postimerkki(props) {

const tyylit = useTheme();
const location = useLocation();

const params = useParams();

const merkki = postimerkit[params.postimerkki_id - 1];

function createData(nimi, arvo){
    return { nimi, arvo }
}

const rivit = [
    createData('Merkin nimi', merkki.merkin_nimi),
    createData('Asiasanat', merkki.asiasanat),
    createData('Ilmestymispäivä', merkki.ilmestymispaiva),
    createData('Käytön päättyminen', merkki.kayton_paattyminen),
    createData('Nimellisarvo', merkki.nimellisarvo),
    createData('Merkin väri', merkki.merkin_vari),
    createData('Painospaikka', merkki.painopaikka),
    createData('Painosmäärä', merkki.painosmaara),
    createData('Taiteilija', merkki.taiteilija),
    createData('Valuutta', merkki.valuutta)
]

return (
    <Container style={tyylit.lisatietoKontti} >
        <Typography style={tyylit.otsikkoPostimerkki}>{merkki.merkin_nimi}</Typography>
        <img 
            src={merkki.kuvan_url} 
            alt="postimerkin kuva"
        ></img>
        <TableContainer>
            <Table>
                <TableBody>
                    {rivit.map((rivi, idx) => (
                        <TableRow key={idx}>
                            <TableCell>
                                {rivi.nimi}
                            </TableCell>
                            <TableCell>
                                {rivi.arvo}
                            </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        
        <Button
            variant="contained"
            fullWidth
            style={tyylit.nappiPostimerkki}
            component={Link}
            to={"../Selaa"}
                state={{ 
                    alku : location.state ? location.state.alku : 0, 
                    loppu : location.state ? location.state.loppu : 20 
                }}
            >
            <KeyboardReturnIcon/>
            Palaa
        </Button>
    </Container>
);
}

export default Postimerkki;
  