import React from 'react'
import Header from './partials/header'
import SideBar from './partials/side-bar'

const LayoutAapp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#000000] h-screen text-white'>
            <Header />
            <div className="grid grid-cols-[400px,auto] gap-2 p-1 h-screen  pt-16">
                <SideBar />
                <div className="bg-gray-100/10 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAapp