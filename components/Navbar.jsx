import React from 'react'
import { IconUser } from '@tabler/icons-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SidebarTrigger } from './ui/sidebar'

const Navbar = () => {
    return (
        <div className='w-full z-50 flex items-center justify-start'>
            <SidebarTrigger />
            <div className='flex items-center mx-3'> 
            {/* <h1 className='font-bold'>Dattrack</h1> */}
            <Avatar className='bg-zinc-900 text-white cursor-pointer select-none'>
                <AvatarFallback className='bg-zinc-900 text-white font-bold'>KS</AvatarFallback>
            </Avatar>
            </div>

        </div>
    )
}

export default Navbar