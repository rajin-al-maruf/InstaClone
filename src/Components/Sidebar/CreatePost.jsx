import {
	Box,
	Button,
	CloseButton,
	Flex,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/contants";
import {BsFillImageFill} from 'react-icons/bs'
import { useRef, useState } from "react";
import usePreviewImg from '../../hooks/usePreviewimg'
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import { addDoc, arrayUnion, collection, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";

const CreatePost = () => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	const [caption, setCaption] = useState('')
	const imageRef = useRef(null)
	const { selectedFile, setSelectedFile, handleImageChange} = usePreviewImg()
	const {isLoading, handleCreatePost} = useCreatePost()
	const showToast = useShowToast()

	const handlePostCreation = async() => {
		try {
			await handleCreatePost(selectedFile, caption)
			onClose()
			setCaption("")
			setSelectedFile(null)
		} catch (error) {
			showToast("Error", error.message, "error")
		}
	}
	return (
		<>
			<Tooltip
				hasArrow
				label={"Create"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<CreatePostLogo />
					<Box display={{ base: "none", md: "block" }}>Create</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} size='xl'>
				<ModalOverlay />

				<ModalContent bg={"black"} border={"1px solid gray"}>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Textarea placeholder='Post caption...' 
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
						/>

						<Input 
							type='file' 
							hidden 
							ref={imageRef}
							onChange={handleImageChange}
						/>

						<BsFillImageFill
							style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
							size={16}
							onClick={() => imageRef.current.click()}
						/>
						{selectedFile && (
							<Flex mt={5} w={"full"} position={"relative"} justify={"center"}>
								<Image src={selectedFile} alt="Selected Img"/>
								<CloseButton
									position={"absolute"}
									top={2}
									right={2}
									onClick={() => {
										setSelectedFile(null);
									}}
								/>
							</Flex>
						)}
					</ModalBody>

					<ModalFooter>
						<Button mr={3} isLoading={isLoading} onClick={handlePostCreation}>Post</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePost;



//hook

function useCreatePost() {
	const showToast = useShowToast()
	const [isLoading, setIsLoading] = useState(false)
	const {user} = useAuthStore()
	const { createPost } = usePostStore()
	const { addPost } = useUserProfileStore()
	const { pathname } = useLocation()
	const {userProfile} = useUserProfileStore()

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
		console.error(error);
		showToast("Error", error.message, "error")
		return null
	}
	}

	const handleCreatePost = async (selectedFile, caption) => {
		if(isLoading) return
		if(!selectedFile) throw new Error('Please select an image')
		setIsLoading(true)

		try {

			const imageURL = await uploadToCloudinary(selectedFile)
			if(!imageURL) throw new Error('Image Upload failed')

			const newPost = {
				caption: caption,
				imageURL: imageURL,
				likes:[],
				comments:[],
				createdAt:Date.now(),
				createdBy:user.uid
			}

			const postDocRef = await addDoc(collection(firestore,"posts"),newPost)
			const userDocRef = doc(firestore, "users", user.uid)

			await updateDoc(userDocRef,{posts:arrayUnion(postDocRef.id)})

			if(user.uid === userProfile.uid) createPost({ id: postDocRef.id, ...newPost})
			if(pathname !== "/" && user.uid === userProfile.uid) addPost({ id: postDocRef.id, ...newPost})

			showToast("Success", "Post created successfully", "success")
			
		} catch (error) {
			console.error(error);
			showToast("Error", error.message, "error")
		}finally{
			setIsLoading(false)
		}
	}
	return {isLoading, handleCreatePost}
}