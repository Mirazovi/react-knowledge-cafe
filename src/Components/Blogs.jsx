import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleBookmarksClick,handleTimeFixed}) => {
    const [Blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <div className="">
                {
                    Blogs.map((blog,idx) => <Blog 
                    key={idx}
                    blog={blog}
                    handleBookmarksClick={handleBookmarksClick}
                    handleTimeFixed={handleTimeFixed}
                     ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes  = {
    handleBookmarksClick:PropTypes.func,
    handleTimeFixed:PropTypes.func
}
export default Blogs;