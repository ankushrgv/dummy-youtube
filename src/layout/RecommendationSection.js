import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { RecommendationCard } from "../components/recommendation/RecommendationCard"
import { getDummyRecommendations } from "../dummyData/dummyRecommendationData"

export const RecommendationSection = () => {
  const [recommendations, setRecommendations] = useState([])
  const { videoId } = useParams()

  useEffect(() => {
    console.log(videoId)
    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyRecommendations(videoId));
      }, 3000);
    });

    dummyPromise.then(value => {
      console.log(value)
      setRecommendations(value)
    })
  }, [videoId]);

  return (
    <>
      {
        recommendations.map((video) => {
          return (
            <RecommendationCard key={video.id} video={video} />
          )
        })
      }
    </>
  )
}