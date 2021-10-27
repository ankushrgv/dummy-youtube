import { useEffect, useReducer } from "react"
import { useParams } from "react-router"
import { AddNewComment } from "../components/comments/AddNewComment"
import { AllComments } from "../components/comments/AllComments"
import { getDummyComments } from "../dummyData/dummyCommentData"
import { Loader } from "../components/util/Loader"

const initialState = {
  loading: true,
  error: '',
  comments: []
}

const commentsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        loading: true,
        error: '',
        comments: []
      }

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        comments: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        comments: []
      }

    default:
      return state
  }
}

export const CommentSection = () => {
  const { videoId } = useParams()
  const [state, dispatch] = useReducer(commentsReducer, initialState)

  useEffect(() => {
    dispatch({
      type: "FETCHING",
      payload: []
    })

    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyComments(videoId));
      }, 4000);
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
          : <>
            <AddNewComment />
            <AllComments allComments={state.comments} />
          </>
      }
    </>
  )
}