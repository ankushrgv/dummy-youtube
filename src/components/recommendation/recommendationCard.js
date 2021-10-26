import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const RecommendationCard = (props) => {
  const { video } = props;
  return (
    <Card sx={{ marginBottom: "10px", padding: "10px" }}>
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