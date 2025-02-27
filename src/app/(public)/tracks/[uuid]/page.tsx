import ViewTrack from '@/components/features/music/view-track/view-track'
import React from 'react'


const Page = async({
  params,
}: {
  params: Promise<{ uuid: string }>
})=> {
  return (
    <ViewTrack uuid={(await params).uuid} />
  )
}

export default Page