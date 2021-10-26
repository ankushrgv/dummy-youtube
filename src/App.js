import { Container, Grid } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={9} xs={12}>
                Video Container
              </Grid>
              <Grid item md={12} xs={12}>
                Comments Section
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            Video Recommendations
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
