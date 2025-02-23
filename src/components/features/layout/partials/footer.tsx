import React from 'react'
import { footerData, mapsite } from '../data/footer.data'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='p-8'>
            <div className="grid grid-cols-4 gap-2">
                {footerData.mapLinks.map((map, index) => (
                    <div className="space-y-2" key={index}>
                        <div className="">
                            <h6 className='text-sm font-bold'> {map.titleMap} </h6>
                        </div>
                        <div className="flex flex-col gap-1">
                            {map.links.map((link, index) => (
                                <Link href={link.path} key={index}
                                    className='text-sm text-gray-500 font-medium hover:underline'>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex gap-2">
                    {footerData.social.map((social, index) => (
                        <Link href={social?.path as string} key={index}
                            className='h-12 w-12 flex items-center justify-center hover:bg-gray-100/20 bg-gray-100/10 rounded-full'>
                            {social?.icon}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='mt-8 border-[1px] border-gray-100/10' />
            <div className="flex items-center justify-between mt-4">
                <ul className="flex gap-2 items-center">
                    {mapsite.map((site,index)=>(
                        <Link href={site.path} key={index}
                        className='text-xs text-gray-400 hover:text-white'>
                            {site.title}
                        </Link>
                    ))}
                </ul>
                <p className='text-xs'>© 2025 Spotify AB</p>
            </div>
        </div>
    )
}

export default Footer