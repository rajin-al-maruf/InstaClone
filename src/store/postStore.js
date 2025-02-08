import { create } from "zustand";

const usePostStore = create((set) => ({
    posts:[],
    setPosts: (posts) => set({posts}),
    createPost: (post) => set(state => ({posts: [post, ...state.posts]})),
    deletePost: (id) => set(state => ({posts: state.posts.filter(post => post.id !== id)})),
    //addcomment
}))

export default usePostStore;