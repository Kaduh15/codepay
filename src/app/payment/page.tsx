import Link from 'next/link'

import { button } from '@/components/ui/button'
import { Verified } from 'lucide-react'

export default function PaymentPage() {
  return (
    <main className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1 className="flex items-center justify-center gap-4 text-2xl font-medium">
        Pagamento concluído com sucesso
        <Verified className="text-green-500" />
      </h1>
      <Link
        href="/"
        className={button({
          style: 'primary',
          size: 'lg',
          className: 'font-bold uppercase',
        })}
      >
        Continuar comprando
      </Link>
    </main>
  )
}
