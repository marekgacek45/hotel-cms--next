import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { slugify } from '@/lib/utils'


const FaqItem = ({title, children} :{title: string, children: React.ReactNode}) => {

   

  return (
    <Accordion type='single' collapsible className='border-t  border-primary-600 px-5 md:px-20'>
    <AccordionItem value={slugify(title)}>
        <AccordionTrigger className='text-lg md:text-xl cursor-pointer data-[state=open]:text-primary-600'>{title}</AccordionTrigger>
        <AccordionContent className='text-left py-14  text flex flex-col gap-5'>
         {children}
        </AccordionContent>
    </AccordionItem>
</Accordion>
  )
}

export default FaqItem