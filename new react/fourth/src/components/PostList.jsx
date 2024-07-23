import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";


const PostList = () => {

    const { postList,addInitialPosts } = useContext(postListData);

    const handleGetPostsClick = () => {
        //fetch is a js api for network request, it returns a promise . default  method is GET for POST use 'POST' and res.json for data it also gives a promise 
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data)=>{
                //here all the post from the api is in data.posts ,data here is what we get from api call its an object containing a lot of value but we only need posts
                addInitialPosts(data.posts)
            });

    }

    return (
        <>
            {postList.length === 0 && (<WelcomeMsg onGetPostsClick={handleGetPostsClick} ></WelcomeMsg>)}

            {postList.map((data) => (<Post
                key={data.id}
                post={data}
            />))}

        </>
    );
}

export default PostList;