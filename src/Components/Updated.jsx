import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { AUTHORS_MOCKDATA } from '../constants'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useForm } from 'react-hook-form'

const Updated = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('image', data.image[0])
        console.log(formData);
    } 
    axios.get('https://blogapi-se2j.onrender.com/api/v1/blogs',+id)
        .then((res) =>  formData(res.data))
        .then(err => console.log(err))

    const updateData = (event) => {
        event.preventDefault();
        axios
          .post("https://blogapi-se2j.onrender.com/api/v1/blogs/"+ id, formData)
          .then((res) => {
            alert("Data updated successfully!!");
            navigate("/dashboard");
          });
      };



  return (
    <div className='author__container flex'>
        <Sidebar/>
        <div>
        <form onSubmit={handleSubmit}>
        Add title: <br /> <input type="text" name='title'
        {...register("title")}
        // onChange={(event) => setBlogs({...blogs, title:event.target.value})}

         /> 
        <br />
        Description: <br /> <input type="text" name='description'
        {...register("description")}
        // onChange={(event) => setBlogs({...blogs, description:event.target.value})}
        />
        <br />
        Upload a picture: <br /> <input type="file" name='image'
        {...register("image")}
        // onChange={(event) => setBlogs({...blogs, image:event.target.files})} 
        />
        <br /><br />
        <button type='submit'>Submit new blog</button>
        <br /><br /><br />
        </form>
        <div>
        </div></div>
    </div>
  )
}

export default Updated