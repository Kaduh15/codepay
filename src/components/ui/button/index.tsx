import { ButtonHTMLAttributes } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

export const button = tv({
  variants: {
    style: {
      primary:
        'rounded-md bg-green-500 px-5 py-4 text-base font-medium text-white hover:bg-green-600',
      outline:
        'rounded border-2 border-green-500 px-5 py-4 text-green-500 hover:bg-green-500 hover:text-white',
      link: 'font-medium text-red-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-md border-2 px-4 py-3',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    style: 'primary',
  },
})

type ButtonVariants = {
  children: React.ReactNode
  variants?: VariantProps<typeof button>
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variants,
  className,
  ...props
}: ButtonVariants) {
  return (
    <button
      className={button({
        ...variants,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
