import { useContext } from "react";
import Post from "./Post";
import {PostList as postListData}  from "../store/Post-list-store";

const PostList = ()=>{

    const {postList} = useContext(postListData);
    return(
        <>
        {postList.map((data)=>(<Post 
        key={data.id} 
        post={data}
        />))}
        </>
    );
}

export default PostList;