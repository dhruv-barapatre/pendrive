import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../services/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
  const handlelogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

  }
  return (
    <>
      <h1>Login Page</h1>
      <GoogleButton onClick={handlelogin} />
    </>
  )
}

export default Login