
import { useState } from 'react'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import useUserProfileStore from '../store/userProfileStore'
import { firestore} from "../firebase/firebase";
import {doc, updateDoc} from 'firebase/firestore'

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const {user, setUser} = useAuthStore()
  const {setUserProfile} = useUserProfileStore()
  const showToast = useShowToast()

  // Cloudinary Upload function

  const uploadToCloudinary = async (file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "insta_clone")

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dfh04qtlz/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data.secure_url;

    } catch (error) {
      showToast("Error", error.message, "error")
      return null
    }
  }



  const editProfile = async(inputs, selectedFile) => {
    if(isUpdating || !user) return
    setIsUpdating(true)
    
    const userDocRef = doc(firestore, "users", user.uid)

    try {
        let profilePicURL = user.profile;
        if (selectedFile) {
          const uploadedImageUrl = await uploadToCloudinary(selectedFile);
          if (uploadedImageUrl) {
            profilePicURL = uploadedImageUrl;
          }
        }

        const updatedUser = {
            ...user,
            fullName: inputs.fullName || user.fullName,
            userName: inputs.userName || user.userName,
            bio: inputs.bio || user.bio,
            profilePicURL: profilePicURL,
        }

        await updateDoc(userDocRef, updatedUser)
        localStorage.setItem("user-info", JSON.stringify(updatedUser))
        setUser(updatedUser)
        setUserProfile(updatedUser)
        showToast("Success", "Profile updated successfully", "success");

    } catch (error) {
        showToast("Error", error.message, "error")
    }
  }

  return {editProfile, isUpdating}
}

export default useEditProfile
