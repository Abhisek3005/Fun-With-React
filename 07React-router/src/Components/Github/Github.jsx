import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const Data = useLoaderData()
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Abhisek3005")
    //         .then(Response => Response.json())
    //         .then(Data => {
    //             console.log(Data);
    //             setData(Data)
                
            
    //     })
    // })
  return (
      <div className='bg-gray-600 text-white text-2xl text-center'>Github Followers: {Data.followers}
       <img  src={Data.avatar_url} alt='Git picture' width={300} />
      </div>
  )
}

export default Github

export const githubInfoloader = async () => {
    const response = await fetch('https://api.github.com/users/Abhisek3005')
    return response.json()
}