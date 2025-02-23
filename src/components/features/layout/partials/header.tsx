import Link from 'next/link';
import React from 'react'
import { SiApplemusic } from "react-icons/si";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { LuCloudDownload } from "react-icons/lu";
import { Bell } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='py-2 px-8 fixed w-full top-0 right-0 left-0 bg-[#000000] z-20'>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-10">
                    <Link href={"/"}>
                        <SiApplemusic className='h-8 w-8' />
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link href={"/"} className=''>
                            <button className='h-10 w-10 bg-gray-100/20 flex items-center justify-center rounded-full'>
                                <GoHomeFill className='h-6 w-6' />
                            </button>
                        </Link>
                        <div className="flex items-center gap-3 h-11 w-[450px] bg-gray-100/10 rounded-full px-4">
                            <button>
                                <FiSearch className='h-6 w-6 text-gray-400' />
                            </button>
                            <input type="text"
                                className='w-full h-full bg-transparent border-none outline-none text-gray-400 text-md'
                                placeholder='O que voce quer ouvir?'
                            />
                            <div className="bg-gray-100/20 h-[60%] w-[1px]"></div>
                            <button className=''>
                                <LuShoppingBag className='h-5 w-5 text-gray-400' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <button className="bg-white text-black px-4 py-2 rounded-full font-semibold text-[13px]">
                        Ver Planos Premium
                    </button>
                    <Link href={"/"} className=''>
                        <button className='flex items-center gap-2  text-gray-400 hover:text-white'>
                            <LuCloudDownload className='h-4 w-4' />
                            <span className='text-[13px]'>Baixar aplicativo</span>
                        </button>
                    </Link>
                    <button className='text-gray-400 hover:text-white'>
                        <Bell className='h-5 w-5' />
                    </button>
                    <Link href={"/"}>
                        <div className="relative h-10 w-10 border-4 border-gray-100/15  rounded-full ">
                            <Image
                                src={"/images/file.enc"}
                                fill alt=''
                                className='rounded-full'
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header