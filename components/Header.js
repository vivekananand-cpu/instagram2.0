import React from 'react'
import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    MenuIcon,
    PaperAirplaneIcon,


} from "@heroicons/react/outline";

import {

    HomeIcon,


} from "@heroicons/react/solid"
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
    const { data: session } = useSession();
    const router=useRouter();
    const[open,setOpen]=useRecoilState(modalState);

    

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex items-center  justify-between bg-white max-w-6xl mx-5 xl:mx-auto">
                {/* left */}
                <div className="relative hidden lg:inline-grid h-24  w-24 cursor-pointer">
                    <Image onClick={()=>router.push('/')} src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"

                    />
                </div>
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer ">
                    <Image onClick={()=>router.push('/')} src="https:/links.papareact.com/jjm"
                        layout="fill"
                    />
                </div>

                {/* middle:-search bar */}
                <div className=" relative mt-1 p-3 rounded-md  ">
                    <div className="flex items-center space-x-2 " >
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                        <input placeholder="Search" className="bg-gray-50 block w-full pl-10 outline-none border-gray-500 focus:ring-black focus:border-black rounded-md " type="text" />



                    </div>

                </div>


                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={()=>router.push('/')} className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                    <MenuIcon className="h-6 md:hidden w-10 cursor-pointer" />
                    {session ? (
                        <>
                            <div className="relative h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out">
                                <PaperAirplaneIcon className="h-6 rotate-45  hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                    6
                                </div>

                            </div>
                            <PlusCircleIcon onClick={()=>setOpen(true)} className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />

                            <UserGroupIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                            <HeartIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                            <img onClick={signOut} className="h-10 rounded-full cursor-pointer" src={session?.user?.image} alt="profile-pic" />
                        </>

                    ) : (
                        <button onClick={signIn}>Sign In</button>

                    )}




                </div>

            </div>



        </div>
    )
}

export default Header
