import { Typography, Container, Grid, Card, CardHeader, CardMedia, CardContent, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import postimerkit from './postimerkit';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Selaa(props) {

const [listanAlku, setListanAlku] = useState(0);
const [listanLoppu, setListanLoppu] = useState(20);

const location = useLocation();

const tyylit = useTheme();

const Kortti = (props) => {
    return(
        <Grid item xs={12} sm={6} md={3} >
            <Card style={tyylit.kortti} >
                <CardHeader 
                    title={props.merkki.merkin_nimi}
                    style={tyylit.cardTitle}
                ></CardHeader>
                <CardMedia
                    component="img"
                    alt="postimerkin kuva"
                    height="280"
                    src={props.merkki.kuvan_url}
                >
                </CardMedia>
                <CardContent>
                    <Typography>Ilmestymispvm: {props.merkki.ilmestymispaiva}</Typography>
                    <Typography>Arvo: {props.merkki.nimellisarvo}</Typography>
                    <Typography>Valuutta: {props.merkki.valuutta}</Typography>
                </CardContent>
                <Button
                    fullWidth
                    style={tyylit.lisatietoNappi}
                    component={Link}
                    to={`./${props.merkki.postimerkki_id}`}
                    state={{
                        alku : props.alku, 
                        loppu : props.loppu 
                    }}
                >Lisätietoja</Button>
            </Card>
        </Grid>
    )
}

const SeuraavaNappi = (props) => {

    const seuraava = () => {
        let alku = listanAlku;
        let loppu = listanLoppu;
        
        alku += 20;
        loppu += 20;
    
        setListanAlku(alku);
        setListanLoppu(loppu);
    
        if (location.state) {
            location.state.alku += 20;
            location.state.loppu += 20;
        }
    }

    return(
        <Button
            variant="contained"
            onClick={seuraava}
            style={tyylit.seuraavaNappi}
            >
            Seuraava sivu
            <ArrowForwardIcon sx={{ ml:"5px" }} />
        </Button>
    )
}

const EdellinenNappi = (props) => {

    const edellinen = () => {
        let alku = listanAlku;
        let loppu = listanLoppu;
    
        alku -= 20;
        loppu -= 20;
    
        setListanAlku(alku);
        setListanLoppu(loppu);
    
        if (location.state) {
            location.state.alku -= 20;
            location.state.loppu -= 20;
        }
    }

    return(
        <Button
            variant="contained"
            onClick={edellinen}
            style={tyylit.edellinenNappi}
            >
            <ArrowBackIcon sx={{ mr:"5px" }} />
            Edellinen sivu
        </Button>
    )
}

const MerkkiLista = (props) => {
    return(
        <Grid container spacing={3}>
            {props.postimerkit.slice(props.alku, props.loppu).map((merkki, idx) => {
                return(
                    <Kortti alku={props.alku} loppu={props.loppu} merkki={merkki} key={idx} />
                );
            })}
            <Box
                style={tyylit.nappiKontti} 
                >
                {(props.alku > 0)
                    ?  <EdellinenNappi />
                    :   null
                }
                {(props.loppu < props.postimerkit.length)
                    ?   <SeuraavaNappi />
                    :   null
                }
            </Box>
        </Grid>
    )
}

return (
    <Container style={tyylit.merkkiKontti}>
        {(location.state)
            ?   <MerkkiLista 
                    postimerkit={postimerkit} 
                    alku={location.state.alku} 
                    loppu={location.state.loppu} 
                    />
            :   <MerkkiLista 
                    postimerkit={postimerkit} 
                    alku={listanAlku} 
                    loppu={listanLoppu} 
                    />
        }
    </Container>
    );
}