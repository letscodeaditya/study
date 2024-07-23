const WelcomeMsg = ({onGetPostsClick})=>{
    return(
        <center> 
            <h2>welcome to social media</h2>
            <button onClick={onGetPostsClick}>see posts</button>
        </center>
       
    );
}

export default  WelcomeMsg;