import { Flex, Text, Image } from "@chakra-ui/react"
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import {auth, firestore} from '../../firebase/firebase'
import useShowToast from '../../hooks/useShowToast'
import useAuthStore from '../../store/authStore'
import { setDoc, doc, getDoc } from "firebase/firestore"


const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)


  const handleGoogleAuth = async () => {
    try {
      
      const newUser = await signInWithGoogle()
      if(!newUser && error){
        showToast("Error", error.message, "error")
        return
      }

      const userRef = doc(firestore, "users", newUser.user.uid)
      const userSnap = await getDoc(userRef)

      if(userSnap.exists()){
        //login
        const userDoc = userSnap.data()
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        loginUser(userDoc)
      }else{
        //signup
        const userDoc ={
          uid: newUser.user.uid,
          email: newUser.user.email,
          userName: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio:"",
          profilePicURL: newUser.user.photoURL,
          followers:[],
          following:[],
          posts:[],
          createdAt:Date.now()
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
      localStorage.setItem("user-info", JSON.stringify(userDoc))
      loginUser(userDoc)
      }

    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }


  return (
    <>
      <Flex 
        alignItems={"center"} 
        justifyContent={"center"} 
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <Image src='/google.png' alt='google logo' w={5}/>
        <Text mx={2} color={"blue.400"} cursor={"pointer"}>
          {prefix} with google
        </Text>
      </Flex>
    </>
  )
}

export default GoogleAuth
