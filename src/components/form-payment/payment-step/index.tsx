'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { paymentStepFormAction } from '../actions'

const PaymentStepSchema = z.object({
  cardNumber: z
    .string({
      required_error: 'Número do cartão é obrigatório',
    })
    .length(16, 'Número do cartão deve ter 16 caracteres'),
  cardName: z
    .string({
      required_error: 'Nome do cartão é obrigatório',
    })
    .min(3, 'Nome do cartão deve ter no mínimo 3 caracteres')
    .refine((value) => value.trim().split(' ').length > 1, {
      message: 'Nome completo é obrigatório',
    }),
  cardExpirationYear: z.coerce
    .string({
      required_error: 'Ano de expiração é obrigatório',
    })
    .min(4, 'Ano de expiração deve ter no mínimo 4 caracteres'),
  cardExpirationMonth: z.coerce
    .string({
      required_error: 'Mês de expiração é obrigatório',
    })
    .min(2, 'Mês de expiração deve ter no mínimo 2 caracteres'),
  cardCVV: z.coerce
    .string({
      required_error: 'CVV é obrigatório',
    })
    .min(3, 'CVV deve ter no mínimo 3 caracteres'),
})

type PaymentForm = z.infer<typeof PaymentStepSchema>

export default function PaymentStep() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PaymentForm>({
    resolver: zodResolver(PaymentStepSchema),
    mode: 'all',
  })
  const onSubmit = handleSubmit(() => {
    paymentStepFormAction()
  })

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <Input
        label="Nome do Carão"
        placeholder="José da Silva"
        {...register('cardName')}
        error={errors.cardName?.message}
        classDiv="w-full"
      />

      <Input
        label="Número do Carão"
        placeholder="0000 0000 0000 0000"
        {...register('cardNumber')}
        error={errors.cardNumber?.message}
        classDiv="w-full"
      />

      <div className="flex flex-wrap items-center justify-start gap-16">
        <div className="flex gap-4">
          <Input
            label="Mês"
            {...register('cardExpirationMonth')}
            placeholder="01"
            error={errors.cardExpirationMonth?.message}
          />
          <span className="pt-11 text-4xl text-slate-400">/</span>
          <Input
            label="Ano"
            {...register('cardExpirationYear')}
            placeholder="2023"
            error={errors.cardExpirationYear?.message}
          />
        </div>
        <Input
          label="CVV"
          {...register('cardCVV')}
          placeholder="123"
          error={errors.cardCVV?.message}
        />
      </div>
      <div className="space-x-12 text-end">
        <Link className="font-medium" rel="stylesheet" href="/?step=1">
          Voltar
        </Link>
        <Button
          variants={{
            style: 'primary',
            size: 'lg',
          }}
          type="submit"
        >
          Próximo
        </Button>
      </div>
    </form>
  )
}
