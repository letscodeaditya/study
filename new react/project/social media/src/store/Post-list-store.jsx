import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
    postList: [],
    addPost: ()=>{},
    deletePost: ()=>{}
});


const postListReducer = (currPostList,action)=>{
    let newPostList =  currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post)=>post.id !== action.payload.postId)
    }
    else if(action.type === 'ADD_POST'){
        newPostList = [action.payload ,...currPostList];
    }
    return newPostList;
}


const PostListProvider = ({children})=>{

 const [postList,dispatchPostList] = useReducer(postListReducer,DEFAULT_POST);


 const addPost = (userId,postTitle,postBody,postReact,Tags) =>{
    dispatchPostList({
        type: 'ADD_POST',
        payload: {
            id: Date.now(),
            title: postTitle,
            body: postBody,
            reactions: postReact,
            userid: userId,
            tags: Tags,
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


    return (<PostList.Provider 
            value={{postList,addPost,deletePost}}>
            {children}
            </PostList.Provider>
    );
};


const DEFAULT_POST = [{
    id: '1',
    title: 'going to mumbai',
    body: 'vacation started',
    reactions: 2,
    userid: 'user-9',
    tags: ['vacation','mumbai']
},
{
    id: '2',
    title: 'got job',
    body: 'finally',
    reactions: 15,
    userid: 'user-12',
    tags: ['fullstack']
} 
];

export default PostListProvider;