import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useCallback, useEffect, useReducer, useState } from "react";
import { getSubCommentsByCommentId } from "../../dummyData/dummySubComment";
import { Loader } from "../util/Loader";
import { AllComments } from "./AllComments";

const initialState = {
  loading: false,
  error: '',
  subComments: []
}

const subCommentsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        loading: true,
        error: '',
        subComments: []
      }

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        subComments: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        subComments: []
      }

    default:
      return state
  }
}

export const CommentCard = (props) => {
  const { data } = props;
  const [subCommentVisible, setVisibility] = useState(false)
  const [state, dispatch] = useReducer(subCommentsReducer, initialState)

  const fetchSubComments = useCallback(() => {
    if (state.subComments.length > 0) {
      setVisibility(true)
    }
    else {
      dispatch({
        type: "FETCHING"
      })
      const dummyPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(getSubCommentsByCommentId(data.id, data.replyCount));
        }, 1000);
      });

      dummyPromise.then(value => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: value
        })
        setVisibility(true)
      }).catch(error => dispatch({ type: "FETCH_ERROR" }))
    }
  }, [data.id, data.replyCount, state.subComments])

  useEffect(() => {
    if (subCommentVisible) {
      fetchSubComments();
    }
  }, [subCommentVisible, fetchSubComments])

  const handleShowAllReplies = () => {
    fetchSubComments();
  }

  const handleHideAllReplies = () => {
    setVisibility(false)
  }

  return (
    <Grid container spacing={2} sx={{ marginBottom: "25px" }}>
      <Grid item md={1}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 1 }} />
        </Box>
      </Grid>
      <Grid item md={11}>
        <Grid container spacing={2}>
          <Grid item md={12} sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography variant="body1" color="text.primary" sx={{ marginRight: "10px" }}>
              {data.userHandle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.postedOn}
            </Typography>
          </Grid>
          <Grid item md={12} style={{ paddingTop: "0px" }}>
            <Typography variant="subtitle2" color="text.secondary">
              {data.commentString}
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={5}
            >
              <Grid item>
                <Button>Like</Button><Typography variant="caption">{data.likes}</Typography>
              </Grid>
              <Grid item>
                <Button>Dislike</Button><Typography variant="caption">{data.dislikes}</Typography>
              </Grid>
              <Grid item>
                <Button>Reply</Button>
              </Grid>
            </Grid>
          </Grid>
          {
            data.replyCount > 0
              ? state.loading
                ? <Loader />
                : subCommentVisible
                  ? <Grid item md={12} style={{ paddingTop: "0px" }}>
                    <Button color="error" onClick={handleHideAllReplies}>Hide {data.replyCount} replies</Button>
                    <AllComments allComments={state.subComments} />
                  </Grid>
                  : <Grid item md={12} style={{ paddingTop: "0px" }}>
                    <Button color="error" onClick={handleShowAllReplies}>View {data.replyCount} replies</Button>
                  </Grid>
              : null
          }
        </Grid>
      </Grid>
    </Grid>
  )
}