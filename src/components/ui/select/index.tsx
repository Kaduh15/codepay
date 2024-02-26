import { SelectHTMLAttributes, forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

export type SelectProps = {
  label?: string
  classLabel?: string
  classDiv?: string
  error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, classLabel, className, classDiv, error, ...props }, ref) => {
    return (
      <div className={twMerge('flex flex-col gap-4', classDiv)}>
        {label && (
          <label
            htmlFor={props.id}
            className={twMerge(
              'cursor-pointer font-medium capitalize text-slate-500',
              classLabel,
            )}
          >
            {label}
          </label>
        )}
        <select
          data-error={!!error}
          className={twMerge(
            'rounded-md bg-zinc-100 px-5 py-4 text-slate-700  data-[error=true]:border-2 data-[error=true]:border-red-500 data-[error=true]:bg-red-100',
            className,
          )}
          defaultValue=""
          {...props}
          ref={ref}
        >
          {props.children}
        </select>
        {error && <p className="font-medium text-red-500">{error}</p>}
      </div>
    )
  },
)

Select.displayName = 'Select'

export default Select
