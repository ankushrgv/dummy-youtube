import { Typography } from "@mui/material"
import { useEffect, useReducer } from "react"
import { useParams } from "react-router"
import { Loader } from "../util/Loader"

const initialState = {
  loading: true,
  error: '',
  streamingData: ""
}

const videoPlayerReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        loading: true,
        error: '',
        streamData: ""
      }

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        streamData: "This is the video player"
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        streamData: ""
      }

    default:
      return state
  }
}

export const VideoPlayer = () => {
  const { videoId } = useParams()
  const [state, dispatch] = useReducer(videoPlayerReducer, initialState)

  useEffect(() => {
    dispatch({
      type: "FETCHING",
      payload: []
    })

    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(videoId);
      }, 4000);
    });

    dummyPromise.then(value => {
      dispatch({
        type: "FETCH_SUCCESS"
      })
    }).catch(error => dispatch({ type: "FETCH_ERROR" }))
  }, [videoId]);

  return (
    <div style={{
      "height": 450,
      "backgroundColor": "#222222",
      "color": "white",
      "marginBottom": "20px"
    }}>
      {
        state.loading ? <Loader /> : <Typography variant="body1">{state.streamData}</Typography>
      }
    </div>
  )
}