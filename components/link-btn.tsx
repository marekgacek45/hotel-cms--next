import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LinkBtnProps extends React.ComponentProps<typeof Button> {
  href: string
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'eco' | 'outline'
}

const LinkBtn = ({ href, children, variant = 'default', ...props }: LinkBtnProps) => {
  return (
    <Button asChild variant={variant} {...props}>
      <Link href={href} >
        <span
          className={cn(
            'tracking-button duration-300 z-10 text-wrap md:text-nowrap text-center flex justify-center items-center',
            variant === 'secondary' || variant === 'outline'
              ? 'group-hover:text-white'
              : 'group-hover:text-primary-600'
          )}
        >
          {children}
        </span>
      </Link>
    </Button>
  )
}

export default LinkBtn
