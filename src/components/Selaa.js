import { Typography, Container, Grid, Card, CardHeader, CardMedia, CardContent, Button, useTheme } from '@mui/material';
import { useState } from 'react';
import postimerkit from './postimerkit';
import { Link, useLocation } from 'react-router-dom';

function Selaa(props) {

const [listanAlku, setListanAlku] = useState(0);
const [listanLoppu, setListanLoppu] = useState(20);

const location = useLocation();

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

const tyylit = useTheme();


return (
    <Container style={tyylit.merkkiKontti}>
    <Grid container spacing={3}>

    {(location.state)
        ?   <>
            {postimerkit.slice(location.state.alku, location.state.loppu).map((merkki, idx) => {
            return(
            <Grid item xs={6} md={3} key={idx}>
                <Card>
                    <CardHeader 
                        title={merkki.merkin_nimi}
                        style={tyylit.cardTitle}
                    ></CardHeader>
                    <CardMedia
                        component="img"
                        alt="postimerkin kuva"
                        height="280"
                        src={merkki.kuvan_url}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography>Ilmestymispvm: {merkki.ilmestymispaiva}</Typography>
                        <Typography>Arvo: {merkki.nimellisarvo}</Typography>
                        <Typography>Valuutta: {merkki.valuutta}</Typography>
                    </CardContent>
                    <Button
                        fullWidth
                        style={tyylit.lisatietoNappi}
                        component={Link}
                        to={`./${merkki.postimerkki_id}`}
                        state={{
                            alku : location.state.alku, 
                            loppu : location.state.loppu 
                        }}
                    >Lisätietoja</Button>
                </Card>
            </Grid>
            );
            })}
            <Container style={tyylit.nappiKontti}>
            {(listanAlku > 0)
            ?  <Button 
                onClick={edellinen}
                style={tyylit.edellinenNappi}
                ><Typography>Näytä edelliset 20 merkkiä</Typography></Button>
            :   (location.state.alku > 0)
                ?   <Button 
                    onClick={edellinen}
                    style={tyylit.edellinenNappi}
                    ><Typography>Näytä edelliset 20 merkkiä</Typography></Button>
                :   null
            }
            {(listanLoppu < postimerkit.length)
            ?   <Button 
                onClick={seuraava}
                style={tyylit.seuraavaNappi}
                ><Typography>Näytä seuraavat 20 merkkiä</Typography></Button>
            :   (location.state.loppu < postimerkit.length)
                ?   <Button 
                    onClick={seuraava}
                    style={tyylit.seuraavaNappi}
                    ><Typography>Näytä seuraavat 20 merkkiä</Typography></Button>
                :   null
            }
            </Container>
            </>
        :   <>
            {postimerkit.slice(listanAlku, listanLoppu).map((merkki, idx) => {
            return(
            <Grid item xs={6} md={3} key={idx}>
                <Card>
                    <CardHeader 
                        title={merkki.merkin_nimi}
                        style={tyylit.cardTitle}
                    ></CardHeader>
                    <CardMedia
                        component="img"
                        alt="postimerkin kuva"
                        height="280"
                        src={merkki.kuvan_url}
                    >
                    </CardMedia>
                    <CardContent>
                        <Typography>Ilmestymispvm: {merkki.ilmestymispaiva}</Typography>
                        <Typography>Arvo: {merkki.nimellisarvo}</Typography>
                        <Typography>Valuutta: {merkki.valuutta}</Typography>
                    </CardContent>
                    <Button
                        fullWidth
                        style={tyylit.lisatietoNappi}
                        component={Link}
                        to={`./${merkki.postimerkki_id}`}
                        state={{
                            alku : listanAlku, 
                            loppu : listanLoppu 
                        }}
                    >Lisätietoja</Button>
                </Card>
            </Grid>
            );
            })}
            <Container style={tyylit.nappiKontti}>
            {(listanAlku > 0)
            ?  <Button 
                onClick={edellinen}
                style={tyylit.edellinenNappi}
                ><Typography>Näytä edelliset 20 merkkiä</Typography></Button>
            :   null
            }
            {(listanLoppu < postimerkit.length)
            ?   <Button 
                onClick={seuraava}
                style={tyylit.seuraavaNappi}
                ><Typography>Näytä seuraavat 20 merkkiä</Typography></Button>
            :   null
            }
            </Container>
            </>
    }

    </Grid>

    

    </Container>
    );
}

export default Selaa;
