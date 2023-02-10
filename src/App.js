import Valikko from './components/Valikko';
import Selaa from './components/Selaa';
import Etusivu from './components/Etusivu';
import Postimerkki from './components/Postimerkki';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  const tyylit = createTheme({
    palette: {
      primary: {
        main: '#ff6f00',
      },
      secondary: {
        main: '#0044ff',
      },
      neutral: {
        main: '#64748B',
      },
      contrastThreshold: 4.5,
    },
    appBarOtsikko:{
      
    },
    etusivuKontti : {
      minHeight:"100vh",
      textAlign:"center",
    },
    appBar:{
      background:"rgba(255,255,255,0.8)",
    },
    etusivuTekstit: {
      background:"rgba(255,255,255,0.8)",
      boxShadow:"2px 2px 10px",
    },
    otsikkoEtusivu : {
      fontSize : "40px",
      margin : "20px",
      padding:"10px",
    },
    alaotsikkoEtusivu : {
      fontSize : "25px",
      padding : "20px",
    },
    otsikkoPostimerkki : {
      fontSize : "40px",
      margin : "20px",
      paddingTop:"20px"
    },
    alaotsikkoPostimerkki : {
      fontSize : "20px",
    },
    nappiPostimerkki : {
      marginTop : "20px",
      marginBottom : "20px",
      padding : "10px",
      fontSize:"15px",
      fontWeight:"bold",
    },
    merkkiKontti : {
      marginTop : "20px"
    },
    nappiKontti : {
      display:"flex",
      justifyContent:"center",
      gap:"10px",
      width:"100%",
      marginTop : "20px",
      marginBottom : "20px",
      marginLeft:"20px",
    },
    seuraavaNappi : {
      padding : 20,
      fontWeight:"bold",
    },
    edellinenNappi : {
      padding : 20,
      fontWeight:"bold",
    },
    kortti:{
      background:"rgba(255,255,255,0.8)",
    },
    lisatietoNappi : {
      fontWeight:"bold"
    },
    cardTitle : {
      height : "120px"
    },
    merkit : {
      width:"100%",
      border:"1px solid red",
    },
    menuItem:{
      paddingRight:"40px",
      fontSize:"20px"
    },
    lisatietoKontti:{
      background:"rgba(255,255,255,0.8)",
      boxShadow:"2px 2px 10px",
    },
  });

  return (
    <Box 
      className="App" 
      sx={{ 
        backgroundColor:"#fff8de", 
        backgroundImage:"url('background.jpg')",
        backgroundSize:"cover",
      }} 
      >
      <ThemeProvider theme={tyylit}>
        <CssBaseline />
        <Valikko />
        <Routes>
          <Route path="/" element={<Etusivu />} />
          <Route path="/Etusivu" element={<Etusivu />} />
          <Route path="/Selaa" element={<Selaa />} />
          <Route path="/Selaa/:postimerkki_id" element={<Postimerkki />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}
