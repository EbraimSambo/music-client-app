import { ScrollAreaCustom } from '@/components/custom/scroll-area.custom'
import { ArrowRight, Library, List, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import image from "@/assets/ab67616d00001e027f3b0d0ae1ae24c6d0b18510.jpeg"
const SideBar = () => {
    return (
        <div className='bg-gray-100/10 rounded-xl h-full relative'>
            <div className="p-4 space-y-4 rounded-xl absolute top-0 right-0 left-0 bg-[#191919a8] shadow-sm z-[3000]">
                <div className="flex items-center justify-between">
                    <button className='flex items-center gap-1 text-gray-400 hover:text-white'>
                        <Library className='h-8 w-8' />
                        <span className='font-semibold'>Sua Biblioteca</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <button className='text-gray-400 h-8 w-8 rounded-full hover:bg-gray-100/10 hover:text-white flex items-center justify-center'>
                            <Plus className='h-5 w-5' />
                        </button>
                        <button className='text-gray-400 h-8 w-8 rounded-full hover:bg-gray-100/10 hover:text-white flex items-center justify-center'>
                            <ArrowRight className='h-5 w-5' />
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className='bg-gray-100/10 hover:bg-gray-100/20  rounded-full py-1 px-3 text-sm'>
                        Playlists
                    </button>
                    <button className='bg-gray-100/10  hover:bg-gray-100/20 rounded-full py-1 px-3 text-sm'>
                        Artistas
                    </button>
                    <button className='bg-gray-100/10 hover:bg-gray-100/20 rounded-full py-1 px-3 text-sm'>
                        Albums
                    </button>
                </div>
            </div>
            <ScrollAreaCustom  className='w-full h-[80vh]  pt-24'>
                <div className="w-full p-4 space-y-5">
                    <div className="flex items-center justify-between text-gray-400 hover:text-white">
                        <button>
                            <FiSearch className='h-5 w-5 ' />
                        </button>
                        <button className='flex items-center gap-2  text-gray-400 hover:text-white'>
                            <span className="text-sm">Recentes</span>
                            <List className='h-6 w-6' />
                        </button>
                    </div>
                    <div className="">
                        {Array.from({ length: 13 }).map((_, index) => (
                            <Link href={"/"} className="flex items-center gap-2 hover:bg-gray-100/5 p-2 rounded-md">
                                <div className="relative h-12 w-12 ">
                                    <Image
                                        src={image}
                                        fill alt=''
                                        className='rounded-lg'
                                    />
                                </div>
                                <div className="">
                                    <h3 className="text-sm">NGA - FORCA</h3>
                                    <h4 className="text-xs text-gray-300">Artista</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </ScrollAreaCustom>
        </div>
    )
}

export default SideBar