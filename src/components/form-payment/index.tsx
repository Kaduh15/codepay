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
    <section className="w-full space-y-12">
      <form action="" className="h-full w-full">
        <CurrentStep />
      </form>
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
