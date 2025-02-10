import React, { useState } from 'react'
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'
import usePostStore from '../store/postStore'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false)
  const showToast = useShowToast()
  const {user} = useAuthStore()
  const {addComment} = usePostStore()

  const handlePostComment= async (postId, comment) => {
    if(isCommenting) return
    if(!user) showToast("Error", "You must be logged in to comment", "error")
    setIsCommenting(true)

    const newComment = {
        comment: comment,
        createdBy: user.uid,
        createdAt: Date.now(),
        postId: postId,
    }
    try {
        const postRef = doc(firestore, "posts", postId)

        await updateDoc(postRef, {
            comments: arrayUnion(newComment)
        })

        addComment(postId, newComment)

    } catch (error) {
        showToast("Error", error.message, "error")
    }finally{
        setIsCommenting(false)
    }
  }
  return {isCommenting, handlePostComment}
}

export default usePostComment
