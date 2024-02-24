import { ShoppingCartStep } from '@/types'

import AccountStep from './account-step'
import PaymentStep from './payment-step'
import ShippingStep from './shipping-step'

type FormPaymentProps = {
  step: ShoppingCartStep
}

const ComponentsStep: {
  [key in ShoppingCartStep]: () => JSX.Element
} = {
  1: AccountStep,
  2: ShippingStep,
  3: PaymentStep,
}

export default function FormPayment({ step = 1 }: FormPaymentProps) {
  return <form action="">{ComponentsStep[step]()}</form>
}
