import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getDummyComments } from "../../dummyData/dummyCommentData"
import { CommentCard } from "./CommentCard"

export const AllComments = () => {
  const [allComments, setAllComments] = useState([])
  const { videoId } = useParams()

  useEffect(() => {
    const dummyPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(getDummyComments(videoId));
      }, 4000);
    });

    dummyPromise.then(value => {
      setAllComments(value)
    })
  }, [videoId]);


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