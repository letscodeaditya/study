import { MdDelete } from "react-icons/md";
import {PostList}  from "../store/Post-list-store";
import { useContext } from "react";

const Post = ({post}) => {

  const {deletePost} = useContext(PostList);
  
  return (
    <div className="card post-class" style={{ width: "18rem;" }}>

      <div className="card-body">

        <h5 className="card-title">{post.title}</h5>

        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
          <MdDelete />
          <span class="visually-hidden">unread messages</span>
        </span>

        <p className="card-text">{post.body}</p>

        <div class="alert alert-info" role="alert">
          this post has been reacted by {post.reactions} people.
        </div>

        {post.tags.map((tag) => (<span key={tag} class="badge text-bg-primary ">{tag}</span>))}

      </div>
    </div>
  );
}
export default Post;