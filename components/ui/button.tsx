import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium uppercase transition-all overflow-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white shadow-xs relative z-10 before:absolute before:inset-0 before:right-0 before:left-auto before:w-0 before:bg-white before:transition-all before:duration-500 before:z-0 hover:before:w-full",
        secondary:
          "bg-white text-primary-600 border border-white shadow-xs relative z-10 before:absolute before:inset-0 before:right-0 before:left-auto before:w-0 before:bg-primary-600 before:transition-all before:duration-500 before:z-0 hover:before:w-full ",
        outline:
          "bg-transparent text-primary-600 border border-secondary-600 shadow-xs relative z-10 before:absolute before:inset-0 before:right-0 before:left-auto before:w-0 before:bg-primary-600 before:transition-all before:duration-500 before:z-0 hover:before:w-full ",
        eco:
          "bg-accent-400 text-white shadow-xs relative z-10 before:absolute before:inset-0 before:right-0 before:left-auto before:w-0 before:bg-white before:transition-all before:duration-500 before:z-0 hover:before:w-full",
      },
      size: {
        default: "px-9 py-3.5",
        sm: "px-12 py-3",
        lg: "px-9 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);


function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }




