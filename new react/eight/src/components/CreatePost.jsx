import { Form , redirect} from 'react-router-dom';
import PostList from '../store/Post-list-store';
import { useContext } from 'react';


const CreatePost = () => {

  
  
  return (
    <Form className="create-post" method="POST">

      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">enter your userid here</label>

        <input type="number" name='userId' className="form-control" id="userid" aria-describedby="emailHelp" placeholder="your id" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="exampleInputEmail1" className="form-label">title</label>

        <input type="text" name='title'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="how are you feeling today" />
      </div>


      <div className="mb-3">
        <label htmlFor="postbody" class="form-label">post content</label>

        <textarea rows={4} type="text" name='body'  className="form-control" id="postbody" placeholder="tell us more about it" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">number of reaction</label>

        <input type="number" name='reactions'  className="form-control" id="userid" aria-describedby="emailHelp" placeholder="how many people reacted on this post" />
      </div>


      <div className="mb-3 ">
        <label htmlFor="userid" className="form-label">enter your hashtags</label>

        <input type="text" name='tags' className="form-control" id="userid" aria-describedby="emailHelp" placeholder="plz enter your tag with space" />
      </div>



      <button type="submit" className="btn btn-primary">Submit</button>
    </Form>
  );
}

//action function gets a data object when we submit the form contain all the value so we can use "name" instead of ref to get particular value to generate correct request object

export async function createPostAction(data){

  const { addPost } = useContext(PostList);
  
  //data.request.formData() gives form data object
  const formData = await data.request.formData();
  //use object.formEntries to get actual input
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(' ');

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    });

  return redirect("/");

}

export default CreatePost;