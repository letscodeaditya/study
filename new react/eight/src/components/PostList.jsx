import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";


const PostList = () => {

    const postList = useLoaderData();


    return (
        <>

            {postList.length === 0 && (<WelcomeMsg ></WelcomeMsg>)}

            {postList.map((data) => (<Post
                key={data.id}
                post={data}
            />))}

        </>
    );
}

//this will called first and its data will be return to loader and we can use thsi data by useloaderdata hook see above 
export  const postLoader = ()=> {
    return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
}

export default PostList;