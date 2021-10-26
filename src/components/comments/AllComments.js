import { dummyCommentData } from "../../dummyData/dummyCommentData"
import { CommentCard } from "./CommentCard"

export const AllComments = () => {
  return (
    <div>
      {
        dummyCommentData.map(comment => {
          return (
            <CommentCard key={comment.id} data={comment} />
          )
        })
      }
    </div>
  )
}