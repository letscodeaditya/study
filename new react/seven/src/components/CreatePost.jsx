import { useRef } from "react";
import { PostList } from "../store/Post-list-store";
import { useContext } from "react";

const CreatePost = () => {

  const useridElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const postreactElement = useRef()
  const tagsElement = useRef()

  const { addPost } = useContext(PostList);

  const HandlePost = (event) => {
    event.preventDefault();
    const userIds = useridElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReact = postreactElement.current.value;
    //this will split the value as it sees a space btw them and make a array with those split element
    const Tags = tagsElement.current.value.split(" ");

    // useridElement.current.value = '';
    // postTitleElement.current.value = '';
    // postBodyElement.current.value = '';
    // postreactElement.current.value = '';
    // tagsElement.current.value = '';

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: postReact,
        userId: userIds,
        tags: Tags,
      })
    })
      .then(res => res.json())
      .then((post)=>{
        console.log(post);
        addPost(post);});

  }

  return (
    <form className="create-post" onSubmit={HandlePost}>

      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">enter your userid here</label>

        <input type="number" ref={useridElement} className="form-control" id="userid" aria-describedby="emailHelp" placeholder="your id" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">title</label>

        <input type="text" ref={postTitleElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="how are you feeling today" />
      </div>


      <div className="mb-3">
        <label htmlFor="postbody" class="form-label">post content</label>

        <textarea rows={4} type="text" ref={postBodyElement} className="form-control" id="postbody" placeholder="tell us more about it" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">number of reaction</label>

        <input type="number" ref={postreactElement} className="form-control" id="userid" aria-describedby="emailHelp" placeholder="how many people reacted on this post" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">enter your hashtags</label>

        <input type="text" ref={tagsElement} className="form-control" id="userid" aria-describedby="emailHelp" placeholder="plz enter your tag with space" />
      </div>



      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default CreatePost;