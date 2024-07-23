import { useReducer,useState,useEffect } from "react";
import { createContext } from "react";

export const PostList = createContext({
    postList: [],
    fetching: false,
    addPost: ()=>{},
    deletePost: ()=>{}
});


const postListReducer = (currPostList,action)=>{
    let newPostList =  currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post)=>post.id !== action.payload.postId)
    }
    else if(action.type == 'ADD_INITIAL_POSTS'){
        newPostList = action.payload.posts;
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload ,...currPostList];
    }
    return newPostList;
}


const PostListProvider = ({children})=>{

 const [postList,dispatchPostList] = useReducer(postListReducer,[]);

 const [fetching,setFetching] = useState(false);



 const addPost = (post) =>{
    dispatchPostList({
        type: 'ADD_POST',
        payload: post,
    });

 };

 //for adding multiple post from API when user open for the first time 

 const addInitialPosts = (posts) =>{
    dispatchPostList({
        type: 'ADD_INITIAL_POSTS',
        payload: {
            posts
        },
    });

 };

 const deletePost = (postId) =>{
    dispatchPostList({
        type: 'DELETE_POST',
        payload: {
            postId,
        }
    });
 };


 useEffect(() => {

    //for aborting api calls
    const controller = new AbortController();
    const signal = controller.signal;

    // as we make api call the value is set to true
    setFetching(true)
    fetch('https://dummyjson.com/posts',{signal})
        .then(res => res.json())
        .then((data) => {
            //here all the post from the api is in data.posts ,data here is what we get from api call its an object containing a lot of value but we only need posts
            addInitialPosts(data.posts)
            //as data is loaded it is set to false
            setFetching(false);
        });

        return()=>{
            console.log("clean up useeffect");
            controller.abort
        }
}, []);


    return (<PostList.Provider 
            value={{postList,fetching,addPost,deletePost}}>
            {children}
            </PostList.Provider>
    );
};



export default PostListProvider;