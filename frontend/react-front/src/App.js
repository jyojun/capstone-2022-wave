import { useEffect, useState } from 'react';
import axios from "axios"
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([])
  const callApi = async()=> {
    axios.get("/board").then((res) => {
      setPosts(res.data.result);
    })
  }
  console.log(posts);
  useEffect(() =>{
    callApi();
  }, [])
  return (
    <>
    <Navbar/>
    <div>
      메인페이지 입니다.
    </div>
    <PostForm/>
    <Posts/>
    <footer>&copy; {new Date().getFullYear()} Wave</footer>
    </>
  )
}

export default App;
