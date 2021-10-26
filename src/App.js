import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Grid } from '@mui/material';
import './App.css';
import Header from './layout/Header';
import { MainBody } from './layout/MainBody';

function App() {
  return (
    <Router>
      <div className="App">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Header />
            </Grid>
            <Switch>
              <Route path="/:videoId">
                <Grid item md={12}>
                  <MainBody />
                </Grid>
              </Route>
            </Switch>
          </Grid>
        </Container>
      </div>
    </Router >
  );
}

export default App;
