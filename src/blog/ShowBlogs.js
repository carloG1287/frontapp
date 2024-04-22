/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URI = `${process.env.REACT_APP_URI}/blogs`;

const ComShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        
        getBlogs();
    }, [])
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlogs(res.data)
        console.log(res.data)
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}/${id}`)
        getBlogs();
    }
    
    if ( !blogs || blogs?.length === 0) {
        return <h1>Loading...</h1>
    }
return (
    <div>
        <h1>Blog List</h1>
        <div>
        <Link to={`/create`}>create</Link>
        { blogs && blogs.map(blog => (

            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
                <button onClick={() => deleteBlog(blog.id)}>Delete</button>
            </div>
        ))}
        </div>
    </div>
)

}

export default ComShowBlogs;