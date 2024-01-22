import  axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './NavBar'

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {}
        if (formData.username === "" || formData.username === null) {
            isValid = false;
            validationErrors.username = "Username required"
        }
        if (formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "Email required"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid"
        }
        if (formData.password === "" || formData.password === null) {
            isValid = false;
            validationErrors.email = "Password required"
        }
        else if (formData.password.length < 6) {
            isValid = false;
            validationErrors.password = "Password is too small"
        }
        setErrors(validationErrors)
        setValid(isValid)

        if (Object.keys(validationErrors).length === 0) {
            axios.post('https://blogapi-se2j.onrender.com/api/v1/users', formData)
            .then(result => {
                alert('Registered Successfully')
                navigate('/login')
            })
            .then(err => console.log(err))
        }
    }
    return (
    <div className="container">
        <Navbar />
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="signup-form">
                <form className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
                    <h4 className="mb-5 text-secondary">Create Your Account</h4>
                    {
                    valid ? <></> :
                    <span className="text-danger">
                        {errors.username};{errors.email}
                        {errors.password}
                    </span>
                }
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <label>Username<span className="text-danger">*</span></label>
                            <input type="text" name="username" className="form-control" placeholder="Enter username"
                            onChange={(event) => setFormData({...formData, username:event.target.value})} />
                        </div>

                        <div className="mb-3 col-md-12">
                            <label>Email<span className="text-danger">*</span></label>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email"
                            onChange={(event) => setFormData({...formData, email:event.target.value})} />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Password<span className="text-danger">*</span></label>
                            <input type="password" name="password" className="form-control" placeholder="Enter Password"
                            onChange={(event) => setFormData({...formData, password:event.target.value})} />
                        </div>
                        <div className="col-md-12">
                           <button className="btn btn-primary float-end">Signup Now</button>
                        </div>
                    </div>
                </form>
                <p className="text-center mt-3 text-secondary">If you have account, Please <a href="#">Login Now</a></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Registration