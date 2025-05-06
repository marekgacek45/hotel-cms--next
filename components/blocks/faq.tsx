import React from 'react'

import FaqItem from '../faq-item'
import { List, ListItem } from '../list'
import { getFaqData } from '@/lib/queries'
import { slugify } from '@/lib/utils'

const Faq = async ({heading,description,items}) => {
	

	return (
		<section className='section'>
			<div className='wrapper'>
				<div className='border border-primary-600 text-center '>
					<h2 className='heading pt-12 after:mx-auto px-5'>{heading}</h2>
					<span className='mt-5 block'>{description}</span>

					<div className='pt-12 '>
						{items.map(({ question, answer }) => (
							<FaqItem key={slugify(question)} question={question} answer={answer}>
								     
							</FaqItem>
						))}
					
					</div>
				</div>
			</div>
		</section>
	)
}

export default Faq
