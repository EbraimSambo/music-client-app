import { ScrollAreaCustom } from '@/components/custom/scroll-area.custom'
import React from 'react'
import MusicCard from '../music/music-card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import Footer from '../layout/partials/footer'

const Home = () => {
    return (
        <div className='bg-gray-100/10 rounded-lg h-full relative'>
            <div className="flex items-center gap-3 p-4 absolute top-0 right-0 left-0 z-10 bg-[#191919] shadow-sm">
                <button className='bg-white text-black  rounded-full py-1 px-3 text-sm'>
                    Todas
                </button>
                <button className='bg-gray-100/10  hover:bg-gray-100/20 rounded-full py-1 px-3 text-sm'>
                    Musicas
                </button>
                <button className='bg-gray-100/10 hover:bg-gray-100/20 rounded-full py-1 px-3 text-sm'>
                    Playlists
                </button>
            </div>
            <ScrollAreaCustom className='w-full h-[80vh] '>
                <div className="px-8 pt-16 space-y-8">
                    <section className='space-y-2'>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-black">
                                Feito para Ebraim Sambo
                            </h1>
                            <Link href={"/"} className='text-xs text-gray-400 font-semibold hover:underline'>
                                Monstar mais
                            </Link>
                        </div>
                        <Carousel className="w-full pl-2"
                        >
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 15 }).map((_, index) => (
                                     <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5" >
                                         <div className="">
                                             <MusicCard  />
                                         </div>
                                     </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </section>

                    <section className='space-y-2'>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-black">
                                Feito para Ebraim Sambo
                            </h1>
                            <Link href={"/"} className='text-xs text-gray-400 font-semibold hover:underline'>
                                Monstar mais
                            </Link>
                        </div>
                        <Carousel className="w-full pl-2"
                        >
                            <CarouselContent className="-ml-1">
                                {Array.from({ length: 15 }).map((_, index) => (
                                     <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5" >
                                         <div className="">
                                             <MusicCard  />
                                         </div>
                                     </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </section>
                </div>
                <Footer />
            </ScrollAreaCustom>
        </div>
    )
}

export default Home