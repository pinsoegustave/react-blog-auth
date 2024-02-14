import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar'
import Footer from './Footer'
import axios  from 'axios'


const BlogInfo = () => {
  const [ data, setData ] = useState([])
  const { title } = useParams();
 
  useEffect(() => {
    axios.get(`https://blogapi-se2j.onrender.com/api/v1/blogs/${title}`)
    .then(res => setData(res.data.blogs))
    .catch(err => console.log(err))
  }, [title])
  
  return (
    <div>
      <NavBar />
      <div className='mt-10 block md:flex border border-green-800 bg-slate-500 h-full'>
        {
          data.map((item, i) => (
            <img src={item.image} className='p-4' />
            ))
          }
        <div className='p-4'>
          <h2>{item.title}</h2>
          <h2 className='font-bold m-2'>The title goes here</h2>
          <div className='border border-black m-2'></div>
          <p>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Illum voluptates ullam id sapiente, 
            labore eligendi expedita ducimus nesciunt cum voluptatem nobis ipsa
             autem magni saepe. Sed, magni quae. Placeat, praesentium!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogInfo
