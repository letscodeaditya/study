import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter } from "react-router-dom";
import App from './routes/App.jsx';
import PostList, {postLoader} from './components/PostList';
import CreatePost, {createPostAction} from './components/CreatePost.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      //here loader method will  execute first before routing to 'postlist' ex-we can use to do networkrequest or read from database before the component is loaded
      //here it wil first execute the postloader which is getting data api and when it will complete then only the route will execute
      {path: '/', element: <PostList/>, loader: postLoader },
      //action method can be used to perform an action on submission of forms which is present in element: createpost
      {path: '/create-post', element: <CreatePost/>,action: createPostAction,}
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
