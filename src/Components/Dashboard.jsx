import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [ data, setData ] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://blogapi-se2j.onrender.com/api/v1/blogs')
    .then(res => setData(res.data.blogs))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='container mt-5'>
        <h2>Take actions on the data</h2>
        <Link to='/addEvent'><button className='btn btn-success my-3'>Create +</button></Link>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { data.map((info, i) => (
                <tr key={i}>
                  <td>{info._id.slice(0, 5) +".."}</td>
                  <td>{info.title}</td>
                  <td>{info.description.slice(0, 10) + "..."}</td>
                  <img src="{info.image}" alt="" width={50} height={50} />
                  <td className='gap-0.5'>
                  <Link
                  className='text-decoration-none btn btn-sm btn-success' 
                    to={`/update/${info._id}`}>Update
                  </Link>
                    <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(info._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )

  function handleDelete(_id) {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      axios.delete('https://blogapi-se2j.onrender.com/api/v1/blogs/'+_id)
      .then(res => {
        alert("Blog deleted");
        navigate('/dashboard');
      })
    }
  }
}

export default Dashboard