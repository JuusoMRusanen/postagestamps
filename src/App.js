import Valikko from './components/Valikko';
import Selaa from './components/Selaa';
import Etusivu from './components/Etusivu';
import Postimerkki from './components/Postimerkki';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export default function App() {

  const tyylit = createTheme({
    otsikkoEtusivu : {
        fontSize : 40,
        margin : 20,
        
    },
    alaotsikkoEtusivu : {
        fontSize : 20,
        
    },
    otsikkoPostimerkki : {
      fontSize : 40,
      margin : 20,
      
    },
    alaotsikkoPostimerkki : {
        fontSize : 20,
    },
    nappiPostimerkki : {
        marginTop : 20,
        padding : 20,
        backgroundColor : 'lightgreen'
    },
    merkkiKontti : {
      marginTop : 20
    },
    nappiKontti : {
        marginTop : 20,
        marginBottom : 20,
        textAlign : 'center'
    },
    seuraavaNappi : {
        padding : 20,
        marginLeft : 10,
        backgroundColor : 'lightgreen'
    },
    edellinenNappi : {
        padding : 20,
        marginRight : 10,
        backgroundColor : 'lightblue'
    },
    lisatietoNappi : {
        backgroundColor : 'lightblue'
    },
    cardTitle : {
      height : "120px"
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={tyylit}>
          <CssBaseline />
          <Valikko />
          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/Selaa" element={<Selaa />} />
            <Route path="/Selaa/:postimerkki_id" element={<Postimerkki />} />
          </Routes>
        </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}
