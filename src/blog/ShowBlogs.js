/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs';

const ComShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlogs();
    }, [])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlogs(res.data)
    }
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}/${id}`)
        getBlogs();
    }
return (
    <div>
        <h1>Blog List</h1>
        <div>
        <Link to={`/create`}>create</Link>
        {blogs.map(blog => (
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