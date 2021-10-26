
import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getDummyDescription } from "../../dummyData/dummyDescriptionData"

export const VideoDescription = () => {
  const [description, setDescription] = useState({})
  const { videoId } = useParams()

  useEffect(() => {
    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyDescription(videoId));
      }, 1000);
    });

    dummyPromise.then(value => {
      setDescription(value)
    })
  }, [videoId]);

  return (
    <Grid container spacing={2} >
      <Grid item md={12} sx={{ "borderBottom": "1px solid #cbcbcb" }}>
        <Typography gutterBottom variant="h5" component="div">
          {description.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.views} views | {description.publishDate}
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography variant="h5" color="text.secondary">
          {description.channel}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Subscribers: {description.subscribers}
        </Typography>

      </Grid>
      <Grid item md={6}>
        <Typography variant="body1" color="text.secondary">
          Likes: {description.likes}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Dislikes: {description.dislikes}
        </Typography>
      </Grid>
      <Grid item md={12} sx={{ "borderBottom": "1px solid #cbcbcb" }}>
        <Typography gutterBottom variant="body2" component="div">
          {description.descriptionText}
        </Typography>
      </Grid>
    </Grid>
  )
}