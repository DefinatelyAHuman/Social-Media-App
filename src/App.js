import './App.css';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AddPost from './components/AddPost';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';
import Posts from './components/Posts';





function App() {

  const [tab,setTab]= useState("Welcome");

  const content=()=>{
    if(tab==="Home"){
      return <div className='postlist'><Posts /></div>;
    }else if(tab==="Add"){
      return <div className='addpost'><AddPost /></div>;
    }else if(tab==="Welcome"){
      return <div className='addpost'><Welcome /></div>;
    }
  }
  return (
    <>
    <PostListProvider>
      <div className='layout'> 
        <Sidebar setTab={setTab}/> 
        <div className='innerlayout'>
          <Navbar/>
          <div>{content()}</div>
          <Footer/>
        </div>
      </div>
    </PostListProvider>
    </>
  )
}

export default App;
