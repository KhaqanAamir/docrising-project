import React from 'react'
import { Link } from 'react-router-dom'

const SignUpAlert = (props) => {

  return (
    <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
    <strong> This email is already registered with an account Please </strong><Link to='/patient/SignIn'>SignIn</Link>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default SignUpAlert