import React from 'react'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled }
    from "@heroicons/react/solid"

const Post = ({ id, username, img, caption }) => {
    return (
        <div className="bg-white my-7 border rounded-sm">
            <div className="flex items-center">
                <img src={img} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt="" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5 mr-2" />
            </div>
            <img src={img} className="object-cover w-full" alt="" />
            {/* buttons */}
            <div className="flex  justify-between px-4 pt-4" >
                <div className="flex space-x-4">
                    <HeartIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />
                    <ChatIcon className="h-7 hover:scale-125 cursor-pointer  transition-all duration-150 ease-out " />
                    <PaperAirplaneIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out  " />
                </div>
                <BookmarkIcon  className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out  " />
            </div>

            {/* captions */}
             <p className="p-5 truncate">

                 <span className="font-bold mr-1">{username} </span> {caption}
             </p>

             {/* comments  */}
             <form className="flex items-center p-4" action="">
                 <EmojiHappyIcon className="h-7" />
                 <input placeholder="Add a comment..." className="border-none  flex-1 focus:ring-0 outline-none" type="text" />
                 <button className="font-semibold text-blue-400">Post</button>
             </form>

        </div>
    )
}

export default Post
