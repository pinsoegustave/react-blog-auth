import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { AUTHORS_MOCKDATA } from '../constants'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useForm } from 'react-hook-form'


const AddEvent = () => {

    const { register, handleSubmit } = useForm();

    
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('image', data.image[0])
        // console.log(data)
        axios.post('https://blogapi-se2j.onrender.com/api/v1/blogs', formData)
        .then(result => {
            alert('New Blog Added')
            navigate('/dashboard')
        })
        .then(err => console.log(err))
    } 



    // const [ blogs, setBlogs ] = useState({
    //     title: '',
    //     description: '',
    //     image: null,
    // })
    // const navigate = useNavigate();

    // const submitAuthor = (e) => {
    //     // e.preventDefault();
    //     console.log(title,description,image);
    //     axios.post('https://blogapi-se2j.onrender.com/api/v1/blogs', blogs)
    //     .then(result => {
    //         alert('New Blog Added')
    //         navigate('/dashboard')
    //     })
    //     .then(err => console.log(err))
    // }
    

  return (
    <div className='author__container flex'>
        <Sidebar/>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        <h2>Authors:</h2>
        {
            AUTHORS_MOCKDATA.map((author) => ( 
                <div key={author.id} className='authors__item flex'>
                    <img className='authors__image' width={120} height={120} 
                     src={author.image} alt="" />
                    <h4>{author.title}</h4>
                    <p>{author.description}</p>
                </div>))
        }
        <div>
        </div></div>
    </div>
  )
}

export default AddEvent