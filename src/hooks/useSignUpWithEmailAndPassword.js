import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth, firestore} from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore'

const useSignUpWithEmailAndPassword = () => {

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const showToast = useShowToast()
      const loginUser = useAuthStore(state => state.login)

      const signup = async (input) => {

        if(!input.email || !input.password || !input.userName || !input.fullName ){
            showToast("Error", "Please fill all the inputs", "error")
            return
        }
        try {
            const newUser = await createUserWithEmailAndPassword(input.email, input.password)
            if(!newUser && error){
                showToast("Error", error.message, "error")
                return
            }
            if(newUser){
                const userDoc ={
                    uid: newUser.user.uid,
                    email: input.email,
                    userName: input.userName,
                    fullName: input.fullName,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
                localStorage.setItem("user-info", JSON.stringify(userDoc))
                loginUser(userDoc)
            }
            
        } catch (error) {
            showToast("Error", error.message, "error")
        }
      }

  return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword
