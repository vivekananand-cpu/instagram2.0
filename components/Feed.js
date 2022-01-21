import { useSession } from 'next-auth/react'
import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import { Suggestions } from './Suggestions'

export const Feed = () => {
    const {data: session}= useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>
        <section>
           
                <Stories />
                 <Posts />
        </section>
           {session && (
            <section className="hidden xl:inline-grid md:inline-grid col-span-1" >
            <div className="fixed top-20">
                 {/* miniprofile */}
                 <MiniProfile />
                 {/* suggestions */}
                 <Suggestions />
            </div>
                 
            </section>

           )}
           
               

        </main>
    )
}
