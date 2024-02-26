import { ShoppingCartStep } from '@/types'

import Button from '../ui/button'
import AccountStep from './account-step'
import PaymentStep from './payment-step'
import ShippingStep from './shipping-step'

type FormPaymentProps = {
  step: ShoppingCartStep
}

const FormComponentsStep: {
  [key in ShoppingCartStep]: () => JSX.Element
} = {
  1: AccountStep,
  2: ShippingStep,
  3: PaymentStep,
}

export default function FormPayment({ step = 1 }: FormPaymentProps) {
  const CurrentStep = FormComponentsStep[step]

  return (
    <section className="w-1/2 space-y-12">
      <h2 className="justify-self-start-start text-xl font-semibold text-slate-800">
        Detalhes da conta
      </h2>
      <CurrentStep />
      <hr className="w-full" />
      <div className="space-x-12 text-end">
        <Button
          variants={{
            style: 'link',
          }}
        >
          Cancelar pedido
        </Button>
        <Button
          variants={{
            style: 'primary',
            size: 'lg',
          }}
        >
          Continuar comprando
        </Button>
      </div>
    </section>
  )
}
