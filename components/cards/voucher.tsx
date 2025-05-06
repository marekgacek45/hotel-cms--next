import Image from 'next/image'
import Link from 'next/link'
import easter from '@/public/assets/easter.jpg'
import { ArrowRight } from 'lucide-react'
import { getAssetUrl } from '@/lib/utils'


const VoucherCard = ({name,price,thumbnail}) => {
  return (
    <Link
    href='#'
    className='h-[420px] lg:h-[550px] 2xl:h-[650px] bg-white flex justify-start items-end w-full relative group overflow-hidden'>
    {/* <div className='bg-primary-600 absolute top-[45px] -right-[65px] w-[290px] uppercase rotate-[42deg] z-20 py-2.5 px-8 text-center'>
        <span className='text-sm font-medium leading-[1.42] uppercase text-white tracking-[.17em]'>Grill w cenie</span>
    </div> */}

    <Image
        src={getAssetUrl(thumbnail)}
        alt={name}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
        className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 text '
    />
    <div className='absolute inset-0 w-full h-full bg-background-dark/50 z-10'></div>

    <div className='p-10 z-20 text-font-light flex flex-col gap-4'>
        <h3 className='text-[26px] font-medium tracking-[.02em]'>{name}</h3>
        <p className='text-lg font-medium tracking-[.02em]'>
            od <span className='text-[26px] font-medium tracking-[.02em]'>{price} zł</span> sztuka
        </p>
       
    </div>

    <ArrowRight className='size-11 z-20 absolute bottom-[35px] right-[30px] text-white stroke-1 group-hover:translate-x-3 transition-transform duration-300' />
</Link>
  )
}

export default VoucherCard