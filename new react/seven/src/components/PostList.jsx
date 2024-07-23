import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";


const PostList = () => {

    const { postList, fetching } = useContext(postListData);



    // //calling api without any button and whenever user open this site

    // //initially setting this state to false means no data is loaded and the if condition check this state if it is false then whole data is fetch from api the state is set to true so that api call is done only one time   
    // const [dataFetched, setDataFetched] = useState(false);

    // if (!dataFetched) {

    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then((data)=>{
    //             //here all the post from the api is in data.posts ,data here is what we get from api call its an object containing a lot of value but we only need posts
    //             addInitialPosts(data.posts)
    //         });

    //     setDataFetched(true);    

    // }




    //useeffect for api calls(beignner)

    //it will only call a function when its dependency is changed 

    //in first argument we pass the actucal function and fro second we can pass 3 types 

    //1st type- [](no dependency) -> in this react will only call this function one time at the starting to fetch and render 
    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then((data) => {
    //             //here all the post from the api is in data.posts ,data here is what we get from api call its an object containing a lot of value but we only need posts
    //             addInitialPosts(data.posts)
    //         });
    // }, []);



    // //2nd type - nothing pass -> this will create a loop and call the function continously 
    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then((data) => {
    //             addInitialPosts(data.posts)
    //         });
    // });


    // //3rd type(setting dependency) - [data] -> we give some data if that data is changed over time then automaticlly call this function
    // useEffect(() => {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then((data) => {
    //             addInitialPosts(data.posts)
    //         });
    // }, [updatepost]);






    //making loading spin for the waiting time for api loading data



    // useEffect(() => {
    //     // as we make api call the value is set to true
    //     setFetching(true)
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then((data) => {
    //             //here all the post from the api is in data.posts ,data here is what we get from api call its an object containing a lot of value but we only need posts
    //             addInitialPosts(data.posts)
    //             //as data is loaded it is set to false
    //             setFetching(false);
    //         });
    // }, []);





    //useeffect (adv)
    //using a return fun to clean or stop any api call or timeout etc which is done in the useeffect function when the user switch to another tab or something while the api call is waiting so we have to clean that api call or timeout 
    

   


    return (
        <>
            {/* in && every condition should be true  */}

        
            {/* it will show loadng when fetch is true */}
            {fetching && <LoadingSpinner></LoadingSpinner>}

            {/* if fetching is true this below statement makes it false ! so that rest of the statement wont execute while fetching is done */}
            {/* this will only display when fetching is false and postlist = 0 */}
            {!fetching && postList.length === 0 && (<WelcomeMsg ></WelcomeMsg>)}

            {/* if fetching is true  it will become false and rest of the statement wont execute and when it is false it will become true and the rest will execute but that time we will have our data to show  */}
            {!fetching && postList.map((data) => (<Post
                key={data.id}
                post={data}
            />))}

        </>
    );
}

export default PostList;