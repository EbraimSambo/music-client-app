import { ScrollAreaCustom } from '@/components/custom/scroll-area.custom'
import React from 'react'
import Footer from '../../layout/partials/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ImPlay3 } from 'react-icons/im'

const ViewTrack = ({ uuid }: { uuid: string }) => {
    return (
        <div className='bg-gray-100/10 rounded-lg h-full relative'>
            <div className="flex items-center gap-3 p-4 absolute top-0 right-0 left-0 z-10 bg-[#191919] shadow-sm">
                <div className="relative h-60 w-60">
                    <Image
                        src={"/images/file.enc"}
                        fill alt=''
                        className='rounded-xl p-2'
                    />
                </div>
                <div className="">
                    <p className="font-semibold text-sm">Musica</p>
                    <h1 className='text-6xl font-black'>So se vive uma vez</h1>
                    <div className="flex items-center ">
                        <div className="relative h-11 w-11">
                            <Image
                                src={"/images/file.enc"}
                                fill alt=''
                                className='rounded-full p-2'
                            />
                        </div>
                        <Link href={"/artists/544545"} className='text-xs hover:underline'>Deezy</Link>
                        <div className="h-[4px] w-[4px] bg-white rounded-full mx-1"></div>
                        <p className="text-xs">2024</p>
                        <div className="h-[4px] w-[4px] bg-white rounded-full mx-1"></div>
                        <p className="text-xs">24:23s</p>
                    </div>
                </div>
            </div>
            <ScrollAreaCustom className='w-full h-[80vh] '>
                <div className="px-8 pt-72 space-y-8">
                    <div className="flex items-center gap-2">
                        <button className='shadow-lg h-1 w-8 bg-yellow-400 text-black rounded-full flex items-center justify-center'>
                            <ImPlay3 className='h-5 w-5 translate-x-[1px]' />
                        </button>
                    </div>
                </div>
                <Footer />
            </ScrollAreaCustom>
        </div>
    )
}

export default ViewTrack