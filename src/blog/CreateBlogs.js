import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = `${process.env.REACT_APP_URI}/blogs`;

const CompCreateBlogs = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    const createBlog = async () => {
        await axios.post(URI, {title, content})
        navigate('/blogs')
    }

    return (
        <div>
            <h1>Create Blog</h1>
            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
            <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={createBlog}>Create</button>
        </div>
    )
}

export default CompCreateBlogs;