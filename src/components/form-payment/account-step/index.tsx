'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { accountStepFormAction } from '../actions'

const AccountFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type AccountForm = z.infer<typeof AccountFormSchema>

export default function AccountStep() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AccountForm>({
    resolver: zodResolver(AccountFormSchema),
  })

  const onSubmit = handleSubmit(() => {
    accountStepFormAction()
  })

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <Input
        label="Email"
        placeholder="email@email.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Senha"
        type="password"
        placeholder="********"
        {...register('password')}
        error={errors.password?.message}
      />
      <div className="space-x-12 text-end">
        <Link className="font-medium" rel="stylesheet" href="#">
          Registre-se para conta
        </Link>
        <Button
          variants={{
            style: 'primary',
            size: 'lg',
          }}
          type="submit"
        >
          Entrar
        </Button>
      </div>
    </form>
  )
}
