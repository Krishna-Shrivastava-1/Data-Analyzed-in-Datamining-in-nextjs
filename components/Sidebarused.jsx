import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from './ui/sidebar'

const Sidebarused = () => {
  return (
    <div>
         <Sidebar className='text-white'>
      <SidebarHeader className='text-white'>
      <h1 className='font-bold text-center'>Dattrack</h1>
      </SidebarHeader>
      <SidebarContent> 
        <SidebarGroup className='text-center cursor-pointer select-none'>
            Dashboard
        </SidebarGroup>
        <SidebarGroup className='text-center cursor-pointer select-none'>
            Student
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
    </div>
  )
}

export default Sidebarused