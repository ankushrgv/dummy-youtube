import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useHistory } from "react-router";

export const RecommendationComponent = (props) => {
  const { video } = props;
  let history = useHistory();

  const handleCardClick = () => {
    history.push(`/${video.id}`)
  }

  return (
    <Card sx={{ marginBottom: "10px", padding: "10px" }} onClick={handleCardClick}>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <CardMedia
              component="img"
              height="100"
              image={video.thumbnail}
              alt="video thumbnail"
            />
          </Grid>
          <Grid item md={6}>
            <CardContent sx={{ padding: "5px" }}>
              <Typography gutterBottom variant="body1" component="div">
                {video.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.channel}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {video.views}
              </Typography>

            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>

  )
}