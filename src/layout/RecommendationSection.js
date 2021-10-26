import { RecommendationCard } from "../components/recommendation/RecommendationCard"
import { dummyRecommendations } from "../dummyData/dummyRecommendationData"

export const RecommendationSection = () => {
  return (
    <>
      {
        dummyRecommendations.map((video) => {
          return (
            <RecommendationCard key={video.id} video={video} />
          )
        })
      }
    </>
  )
}