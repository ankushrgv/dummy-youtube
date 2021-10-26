import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { RecommendationCard } from "../components/recommendation/RecommendationCard"
import { getDummyRecommendations } from "../dummyData/dummyRecommendationData"

export const RecommendationSection = () => {
  const [recommendations, setRecommendations] = useState([])
  const { videoId } = useParams()

  useEffect(() => {
    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyRecommendations(videoId));
      }, 2500);
    });

    dummyPromise.then(value => {
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