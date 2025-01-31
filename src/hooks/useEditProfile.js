//Coundnt update the profile image. Tried to use supabase but didnt work...

import { useState } from 'react'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import useUserProfileStore from '../store/userProfileStore'
import { firestore} from "../firebase/firebase";
import {doc, updateDoc} from 'firebase/firestore'
import { createClient } from '@supabase/supabase-js'

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const {user, setUser} = useAuthStore()
  const {setUserProfile} = useUserProfileStore()
  const showToast = useShowToast()

//   const supabase = createClient('https://vzqcobckjziayqihqwtp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cWNvYmNranppYXlxaWhxd3RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzMjUwMTMsImV4cCI6MjA1MzkwMTAxM30.2Ut2aztFDyL9_6MAe__WuKyFKyhrrYJ4eyYEWN11guI')



  const editProfile = async(inputs, selectedFile) => {
    if(isUpdating || !user) return
    setIsUpdating(true)
    
    const userDocRef = doc(firestore, "users", user.uid)

    try {
        // if(selectedFile){
        //     const { data, error } = await supabase.storage.from('profilepics').upload(`profilepic/${user.uid}`, selectedFile)
        //     if (error) {
        //         showToast("Error", error.message, "error");
        //         setIsUpdating(false);
        //         return;
        //       }
              
        //       console.log("Upload successful:", data);
        // }
        // const { data: publicUrlData } = supabase
        //     .storage
        //     .from('profilepics')
        //     .getPublicUrl(`profilepic/${user.uid}`);


        const updatedUser = {
            ...user,
            fullName: inputs.fullName || user.fullName,
            userName: inputs.userName || user.userName,
            bio: inputs.bio || user.bio,
            // profilePicURL: publicUrlData.publicUrl || user.profile
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
