import React from 'react'
import Stories from './Stories'

const Story = (props) => {
    var src="https://www.jagranimages.com/images/newimg/20052021/20_05_2021-arijit_singh_21660518.jpg"
    return (
        <div>
       
        <img className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform-200 ease-out  " src={src} alt="" />
        <p className="text-xs w-14 truncate text-center">{props.username}</p>
        </div>
    )
}

export default Story
