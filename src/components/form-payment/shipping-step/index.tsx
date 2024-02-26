'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'

import Button, { button } from '@/components/ui/button'
import Input from '@/components/ui/input'
import Select from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { shippingStepFormAction } from '../actions'

// um array com o nome de todos os estados do brasil em ordem alfabética
const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
]

const ShippingFormSchema = z.object({
  address: z.string({
    required_error: 'Endereço é obrigatório',
  }),
  city: z
    .string({
      required_error: 'Cidade é obrigatória',
    })
    .min(3, 'Cidade deve ter no mínimo 3 caracteres'),
  state: z.string({
    required_error: 'Estado é obrigatório',
  }),
  number: z.coerce
    .string({
      required_error: 'Número é obrigatório',
    })
    .min(2, 'Número deve ter no mínimo 2 caracteres'),
})

type ShippingForm = z.infer<typeof ShippingFormSchema>

export default function ShippingStep() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ShippingForm>({
    resolver: zodResolver(ShippingFormSchema),
    mode: 'onBlur',
  })
  const onSubmit = handleSubmit(() => {
    shippingStepFormAction()
  })

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      <Input
        label="Cidade"
        placeholder="São Paulo"
        {...register('city')}
        error={errors.city?.message}
      />

      <Input
        label="Rua, Bairro"
        placeholder="Rua das Flores, Centro"
        {...register('address')}
        error={errors.address?.message}
      />

      <Input
        label="Número"
        placeholder="123"
        {...register('number')}
        error={errors.number?.message}
      />

      <Select
        label="Estado"
        {...register('state')}
        error={errors.state?.message}
      >
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </Select>

      <div className="space-x-12 text-end">
        <Link className="font-medium" rel="stylesheet" href="/?step=1">
          Voltar
        </Link>
        <Button
          className={button({
            style: 'primary',
            size: 'lg',
            disabled: !errors,
          })}
          disabled={!errors}
        >
          Próximo
        </Button>
      </div>
    </form>
  )
}
