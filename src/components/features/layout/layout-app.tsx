import React from 'react'
import Header from './partials/header'
import SideBar from './partials/side-bar'
import PlayerControl from '../music/player-control'

const LayoutAapp = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-[#000000] h-screen text-white'>
            <Header />
            <div className="grid grid-cols-[340px,auto] gap-2 p-1 h-screen  pt-16">
                <SideBar />
                <div className="h-full">
                    {children}
                </div>
            </div>
            <PlayerControl />
        </div>
    )
}

export default LayoutAapp