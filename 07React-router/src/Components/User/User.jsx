import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()

  return (
    <div className='bg-gray-700 text-white text-2xl text-center'>User : {id} </div>
  )
}

export default User