import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Head from '../components/Header';
import Side from '../components/SideBar';
import Footer from '../components/Footer';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import { useState } from 'react';
import PostListProvider from '../store/Post-list-store';
import { Outlet } from 'react-router-dom';

function App() {

  const [selectedTab,setSelectedTab]=useState('home');

  return (
    <PostListProvider>

    <div className='app-conatiner'>
    <Side selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Side>
    <div className="content">
    <Head></Head>
    <Outlet/>
    <Footer></Footer>
    </div>
    </div>

    </PostListProvider>
  )
}

export default App
