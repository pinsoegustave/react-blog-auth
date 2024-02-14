import React, { useEffect, useState } from 'react'
import { IMAGE_DETAILS } from '../constants'
import axios from 'axios';

const URL = 'http://localhost:8000/blogs';

const Posts = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    axios.get('https://blogapi-se2j.onrender.com/api/v1/blogs')
    .then(res => setData(res.data.blogs))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
        <div className='mt-4 w-full border border-green-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-2/5 gap-4'>
            { data.map((item, i) => (
                <section key={i} className='m-2 border rounded-sm'>
                    <span className='float-left'>{item.date}</span>
                    <img src={item.image} alt="" />
                    <h4 className='m-2 font-bold'>{item.title}</h4>
                    <p className='m-2'>{item.description.slice(0, 30) + "...."}</p>
                    <span className='float-right font-extralight'>Read More &rarr;</span>
                </section>
            ))}
        </div>
    </div>
  )
}

export default Posts