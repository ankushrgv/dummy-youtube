import { useEffect, useReducer } from "react";
import { useParams } from "react-router"
import { RecommendationCard } from "../components/recommendation/RecommendationCard"
import { Loader } from "../components/util/Loader";
import { getDummyRecommendations } from "../dummyData/dummyRecommendationData"

const initialState = {
  loading: true,
  error: '',
  recommendations: []
}

const recommendationReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return {
        loading: true,
        error: '',
        recommendations: []
      }

    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        recommendations: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Something went wrong',
        recommendations: []
      }

    default:
      return state
  }
}

export const RecommendationSection = () => {
  const { videoId } = useParams()
  const [state, dispatch] = useReducer(recommendationReducer, initialState)


  useEffect(() => {
    dispatch({
      type: "FETCHING",
      payload: []
    })

    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyRecommendations(videoId));
      }, 2500);
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
          : state.recommendations.map((video) => {
            return (
              <RecommendationCard key={video.id} video={video} />
            )
          })
      }
    </>
  )
}