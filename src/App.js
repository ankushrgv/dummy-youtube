import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './layout/Header';
import { MainBody } from './layout/MainBody';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Header />
          </Grid>
          <Grid item md={12}>
            <MainBody />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
