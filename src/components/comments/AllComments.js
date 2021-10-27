import { CommentCard } from "./CommentCard"

export const AllComments = (props) => {
  const { allComments } = props;

  return (
    <div>
      {
        allComments.map(comment => {
          return (
            <CommentCard key={comment.id} data={comment} />
          )
        })
      }
    </div>
  )
}