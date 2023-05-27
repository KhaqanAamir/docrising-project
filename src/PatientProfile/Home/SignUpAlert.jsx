import React from 'react'

const SignUpAlert = (props) => {

  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong> {props.alert.message} </strong>
</div>
  )
}

export default SignUpAlert