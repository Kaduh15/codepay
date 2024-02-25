import { ButtonHTMLAttributes } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  variants: {
    style: {
      primary:
        'bg-green-500 text-white rounded-md px-5 py-4 font-medium text-base',
      outline: 'rounded border-2 border-green-500 px-5 py-4 text-green-500',
      link: 'font-medium text-red-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-md border-2',
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
