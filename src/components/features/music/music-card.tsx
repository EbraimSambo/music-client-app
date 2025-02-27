"use client"
import { Card } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ImPlay3 } from "react-icons/im";
import { Music } from './core/types';

const MusicCard = ({ music }: { music: Music }) => {
    const [showPlay, setPLay] = React.useState(false)
    return (
        <Link href={"/"}
            onMouseDown={() => setPLay(true)}
            onMouseOut={() => setPLay(false)}
            className=''>
            <Card className='hover:hover:bg-gray-100/5 rounded-md bg-transparent border-none p-[1px]'>
                <div className="relative h-40 w-full">
                    <Image
                        src={music.image}
                        fill alt=''
                        className='rounded-xl p-2'
                    />
                    {showPlay &&
                        <button className='absolute shadow-lg text-black bottom-2 right-2 h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center'>
                            <ImPlay3 className='h-6 w-6' />
                        </button>
                    }
                </div>
                <div className="pt-2 translate-x-3 -translate-y-2">
                    <h3 className="text-sm text-white">
                        {music.artist}
                    </h3>
                    <h4 className="text-sm text-gray-400">
                        Vamos Bazzar
                    </h4>
                </div>
            </Card>
        </Link>
    )
}

export default MusicCard