import React from 'react'
import VoucherCard from '../cards/voucher'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const Vouchers = async ({ heading, listing_type, selected_vouchers }) => {
	const sortOrder = (() => {
		switch (listing_type) {
			case 'latest':
				return '-date_created'
			case 'custom':
				return 'sort'
			default:
				return 'latest'
		}
	})()

	const vouchers =
		listing_type === 'latest'
			? await directus.request<Property[]>(
					readItems('vouchers', {
						filter: { status: { _eq: 'published' } },
						sort: [sortOrder],
						fields: ['name', 'slug', 'thumbnail', 'price'],
						// limit: items_count,
					})
			  )
			: selected_vouchers || []

	console.log('selected', selected_vouchers)

	return (
		<section className='section '>
			<div className='wrapper'>
				<div className='flex  flex-col md:flex-row justify-between items-center mb-12 lg:px-12 gap-7 md:gap-0'>
					<div className='flex justify-between md:justify-start w-full items-center space-x-4'>
						<h2 className='text-[32px] md:text-[38px] lg:text-[43px] text-primary-600'>{heading}</h2>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-y-20'>
					{listing_type === 'latest' && vouchers.map(voucher => <VoucherCard key={voucher.slug} {...voucher} />)}

					{listing_type === 'custom' &&
						vouchers?.map(voucher => (
							<VoucherCard key={voucher?.vouchers_id?.slug || voucher?.slug} {...(voucher?.vouchers_id || voucher)} />
						))}

				
				</div>
			</div>
		</section>
	)
}

export default Vouchers
