import { create } from "zustand";

const usePostStore = create((set) => ({
    posts:[],
    setPosts: (posts) => set({posts}),
    createPost: (post) => set(state => ({posts: [post, ...state.posts]}))
    //deletepost
    //addcomment
}))

export default usePostStore;