
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import Header from './Components/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [times,setTimes] = useState(0);
  
  const handleBookmarksClick = (blog) =>{
    const NewBookmarks = [...bookmarks,blog];
    setBookmarks(NewBookmarks);
  }
 const handleTimeFixed = (time) =>{
  const NewTimes = times + time;
  setTimes(NewTimes);
 }
  return (
    <>  
    <div className='w-[80%] m-auto'>
      <Header/>
      <div className='flex my-4 gap-3'>
        <Blogs 
        handleBookmarksClick={handleBookmarksClick}
        handleTimeFixed={handleTimeFixed}
        ></Blogs>
        <Bookmarks
         bookmarks={bookmarks}
         times={times}
         ></Bookmarks>
      </div>
    </div>
    </>
  )
}

export default App
