import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
    <div className="header-logo">
        <Link to='/'>
        <img className="header-logo" src="/logo.png"/>
        </Link>
          
      </div>
    </>
  )
}

export default Logo