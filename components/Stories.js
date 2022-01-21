import React from 'react'
import faker from 'faker'
import { useEffect, useState } from 'react'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const {data: session}= useSession();
   
    
    const [newUsers,setNewUsers]=useState([]);

    const getNewUsers = async ()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const newData=await res.json();
      setNewUsers(newData);
    }

    useEffect(() => {
      getNewUsers();
    
    },[]);




    return (
       
        <>
        <div className="flex h-[100px]  items-center space-x-2 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black  ">
        {
          session &&(
            <Story img={session.user.image} username={session.user.username} />
          )
        }
          {
            newUsers.map(profile=>{
                  return (
                      <Story key={profile.id}  username={profile.username}  />
                  )
              })
          }
         
        </div>
       
        </>



    )
}

export default Stories
