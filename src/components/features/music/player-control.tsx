import { Progress } from '@/components/ui/progress';
import Image from 'next/image'
import React from 'react'
import { ImPlay3 } from 'react-icons/im'
import { IoPlaySkipBack, IoPlaySkipForward, } from "react-icons/io5";
import { LiaRandomSolid } from "react-icons/lia";
import { RiRepeatLine } from "react-icons/ri";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { MdWebAsset } from "react-icons/md";
import { BsViewList } from "react-icons/bs";
import { MdCastConnected } from "react-icons/md";
import image from "@/assets/ab67616d00001e0229c1b782f11747dee1d35c9e.jpeg"
const PlayerControl = () => {
    return (
        <div className='py-2 px-5 fixed w-full bottom-0 right-0 left-0 bg-[#000000] z-20'>
            <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-0">
                    <div className="relative h-16 w-16">
                        <Image
                            src={image}
                            fill alt=''
                            className='rounded-xl p-2'
                        />
                    </div>
                    <div className="">
                        <h2 className="text-sm">Nao devia</h2>
                        <h3 className="text-gray-400 text-[11px]">POst Malon</h3>
                    </div>
                </div>
                <div className="">
                    <div className="flex items-center justify-center gap-4">
                        <button className="">
                            <LiaRandomSolid className='text-gray-400 h-5 w-5' />
                        </button>
                        <button className="">
                            <IoPlaySkipBack className='h-5 w-5' />
                        </button>
                        <button className='shadow-lg h-8 w-8 bg-white text-black rounded-full flex items-center justify-center'>
                            <ImPlay3 className='h-5 w-5 translate-x-[1px]' />
                        </button>
                        <button className="">
                            <IoPlaySkipForward className='h-5 w-5' />
                        </button>
                        <button className="">
                            <RiRepeatLine className='text-gray-400 h-4 w-4' />
                        </button>
                    </div>
                    <div className="flex items-center gap-1 w-[370px] space-y-1">
                        <div className="text-[10px] text-gray-400 translate-y-[2px]">00:00</div>
                        <Progress value={90} className="w-ful h-1 bg-gray-100/10" />
                        <div className="text-[10px] text-gray-400">02:00</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className=''>
                        <BsViewList className='h-6 w-5 text-gray-400' />
                    </button>
                    <button className=''>
                        <MdCastConnected className='h-6 w-5 text-gray-400' />
                    </button>
                    <div className="flex items-center gap-2">
                        <button className=''>
                            <IoVolumeMediumOutline className='h-6 w-5 text-gray-400' />
                        </button>
                        <Progress value={90} className="w-[90px] h-1 bg-gray-100/10" />
                    </div>
                    <button className=''>
                        <MdWebAsset className='h-6 w-5 text-gray-400' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlayerControl