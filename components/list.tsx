import Image from 'next/image';
import Link from 'next/link';

import emblem from '@/public/assets/emblem.svg';
import { cn } from '@/lib/utils';

export const List = ({ children,className }: { children: React.ReactNode ,className?:string}) => {
  return <ul className={`${cn('flex flex-col gap-2.5 mt-11', className)} `}>{children}</ul>;
};

type ListItemProps =
  | {
      title: string;
      description?: string;
      href: string;
      variant?: 'default' | 'secondary';
    }
  | {
      
      description: string;
      variant: 'third';
    };

export const ListItem = (props: ListItemProps) => {
  const {  description, variant } = props;

  return (
    <li className="flex justify-start items-center gap-4">
      <Image src={emblem} alt="" className="size-6 md:size-7" />
      <div>
        {variant === 'secondary' ? (
          <>
            <Link href={props.href} className="link !uppercase !md:text-[17px] self-center">
              {props.title}
            </Link>
            {description && <span> - {description}</span>}
          </>
        ) : variant === 'third' ? (
          <>
            <span>{description}</span>
          </>
        ) : (
          <>
            <span className="uppercase">{props.title} - </span>
            <Link href={props.href} className="link !uppercase !md:text-[17px] self-center">
              sprawdź
            </Link>
          </>
        )}
      </div>
    </li>
  );
};
