
import { Grid, Typography } from "@mui/material"
import { useEffect, useReducer } from "react"
import { useParams } from "react-router"
import { getDummyDescription } from "../../dummyData/dummyDescriptionData"
import { Loader } from "../util/Loader"

const initialState = {
  loading: true,
  error: '',
  description: []
}

const descriptionReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        loading: true,
        error: '',
        description: []
      }

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        description: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        description: []
      }

    default:
      return state
  }
}

export const VideoDescription = () => {
  const { videoId } = useParams()
  const [state, dispatch] = useReducer(descriptionReducer, initialState)
  const { description } = state

  useEffect(() => {
    dispatch({
      type: "FETCHING",
      payload: []
    })

    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyDescription(videoId));
      }, 1000);
    });

    dummyPromise.then(value => {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: value
      })
    }).catch(error => dispatch({ type: "FETCH_ERROR" }))
  }, [videoId]);

  return (
    <>
      {
        state.loading
          ? <Loader />
          :
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
      }
    </>
  )
}