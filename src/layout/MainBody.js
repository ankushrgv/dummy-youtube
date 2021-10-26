import { Grid } from "@mui/material"
import { CommentSection } from "./CommentSection"
import { RecommendationSection } from "./RecommendationSection"
import { VideoSection } from "./VideoSection"

export const MainBody = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9} xs={12} sx={{ marginTop: "70px" }}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <VideoSection />
          </Grid>
          <Grid item md={12} xs={12}>
            <CommentSection />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12} sx={{ marginTop: "70px" }}>
        <RecommendationSection />
      </Grid>
    </Grid>
  )
}