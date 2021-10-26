import { Container, Grid } from '@mui/material';
import './App.css';
import { CommentSection } from './layout/CommentSection';
import { RecommendationSection } from './layout/RecommendationSection';
import { VideoSection } from './layout/VideoSection';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={12} xs={12}>
                <VideoSection />
              </Grid>
              <Grid item md={12} xs={12}>
                <CommentSection />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <RecommendationSection />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
