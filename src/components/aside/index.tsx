import { ShoppingCartStep } from '@/types'
import { Package, User, Wallet } from 'lucide-react'

type AsideProps = {
  step: ShoppingCartStep
}

function activeStep(step: number, active: number) {
  return step >= active ? 'text-green-500' : ''
}

export default function Aside({ step = 1 }: AsideProps) {
  return (
    <aside className="flex w-full justify-start gap-6">
      <User className={activeStep(step, 1)} />
      <span className={activeStep(step, 1)}>Conta</span>
      <div>-</div>
      <Package className={activeStep(step, 2)} />
      <span className={activeStep(step, 2)}>Envio</span>
      <div>-</div>
      <Wallet className={activeStep(step, 3)} />
      <span className={activeStep(step, 3)}>Pagamento</span>
    </aside>
  )
}
