import React from 'react'
import VoucherCard from '../cards/voucher'

const Vouchers = () => {
	return (
		<section className='section '>
			<div className='wrapper'>
				<div className='flex  flex-col md:flex-row justify-between items-center mb-12 lg:px-12 gap-7 md:gap-0'>
					<div className='flex justify-between md:justify-start w-full items-center space-x-4'>
						<h2 className='text-[32px] md:text-[38px] lg:text-[43px] text-primary-600'>Vouchery</h2>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-y-20'>
					<VoucherCard />
					<VoucherCard />
					<VoucherCard />
					<VoucherCard />
					<VoucherCard />
					<VoucherCard />
				</div>
			</div>
		</section>
	)
}

export default Vouchers
