import { RecommendationCard } from "../components/recommendation/recommendationCard"
import { dummyRecommendations } from "../dummyData/dummyRecommendationData"

export const RecommendationSection = () => {
  return (
    <>
      {
        dummyRecommendations.map((video) => {
          return (
            <RecommendationCard video={video} />
          )
        })
      }
    </>
  )
}