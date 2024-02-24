import { Package, User, Wallet } from 'lucide-react'

export default function Aside() {
  return (
    <aside className="flex w-full justify-start gap-6">
      <User />
      Conta
      <div>-</div>
      <Package />
      Envio
      <div>-</div>
      <Wallet />
      Pagamento
    </aside>
  )
}
