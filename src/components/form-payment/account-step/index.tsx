import Link from 'next/link'

import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

export default function AccountStep() {
  return (
    <section className="space-y-12">
      <h2 className="justify-self-start-start text-xl font-semibold text-slate-800">
        Detalhes da conta
      </h2>

      <Input
        label="Email"
        id="email"
        name="email"
        placeholder="email@email.com"
      />

      <Input
        label="Senha"
        type="password"
        id="password"
        name="password"
        placeholder="********"
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
        >
          Entrar
        </Button>
      </div>
    </section>
  )
}
