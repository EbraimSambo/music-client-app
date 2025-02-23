import React from 'react'
import Header from './partials/header'

const LayoutAapp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#000000] h-screen text-white'>
            <Header />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default LayoutAapp