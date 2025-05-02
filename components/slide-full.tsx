import React from 'react'

// import morning from '@/public/assets/morning.webp'
// import Image from 'next/image'

const SlideFull = ({ children }: {children:React.ReactNode}) => {
  return (
    <div className='relative h-[50vh] md:h-[70vh]  xl:h-[90vh]  z-20'>
   {children}
    <div className='absolute inset-0 w-full h-full bg-background-dark/30 z-10'></div>

  
</div>
  )
}

export default SlideFull