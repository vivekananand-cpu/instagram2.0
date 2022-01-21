import React, { useEffect, useState } from 'react'
import faker from 'faker'
import { data } from 'autoprefixer';
import { useSession } from 'next-auth/react';


export const Suggestions = () => {
    const [newUsers,setNewUsers]=useState([]);




    // const[suggestions,setSuggestions] =useState([]);
    // const getSuggestions =async ()=>{
    //     const response=await fetch("https://jsonplaceholder.typicode.com/users");
    //     const data=response.json();
    //     console.log(data);
      
    //     setSuggestions(data);
        
    // }

    // useEffect(()=>{
    //     getSuggestions();
    // },[]);

    const getNewUsers = async ()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const newData=await res.json();
      setNewUsers(newData);
    }

    useEffect(() => {
      getNewUsers();
    
    },[]);

   
   
   
    return (
        <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>
            
              {
                  newUsers.map(user=>{
                      return (
                        <div overflow="scroll"  className="flex items-center justify-between mt-3">
                   
                   <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Samantha_At_The_Irumbu_Thirai_Trailer_Launch.jpg" className="w-10 h-10  rounded-full border p-[2px] " />
               <div className="flex-1 ml-4">
               <h2 className="font-semibold text-sm">{user.username}</h2>
              <h3 className="text-xs text-gray-400">hey there, follow me</h3>
               </div> 
               <button className="text-blue-400 text-xs font-bold">Follow</button>
             
           </div>

                      )
                  })

              }
                   

                   
                
            
        </div>
    )
}
