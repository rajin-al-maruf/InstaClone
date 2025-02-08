import { useState } from 'react'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

const useLikePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const {user} = useAuthStore()
  const [likes, setLikes] = useState(post.likes.length)
  const [isliked, setIsLiked] = useState(post.likes.includes(user?.uid))
  const showToast = useShowToast()


  const handleLikePost = async () => {
    if(isUpdating) return
    if(!user) return showToast("Error", "You must be logged in to lie a  post", "error")
    setIsUpdating(true)

    try {
        const postRef = doc(firestore, "posts", post.id)
        await updateDoc(postRef, {
            likes: isliked? arrayRemove(user.uid) : arrayUnion(user.uid)
        })

        setIsLiked(!isliked)
        isliked? setLikes(likes - 1) : setLikes(likes + 1)

    } catch (error) {
        showToast("Error", error.message, "error")
    }finally{
        setIsUpdating(false)
    }
  }
  return {handleLikePost, isliked, isUpdating, likes}
}

export default useLikePost
