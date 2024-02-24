import { ChevronDown, ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center border-b border-slate-100 ">
      <div className="flex h-full w-full max-w-7xl items-center justify-between px-6 py-4">
        <nav className="flex gap-16">
          <div className="text-xl font-bold ">codepay.</div>
          <ul className="flex gap-12">
            <li>Inicio</li>
            <li>Comprar</li>
            <li>Contato</li>
            <li>Ajuda</li>
          </ul>
        </nav>

        <section className="items flex justify-center gap-4">
          <div className="items flex justify-center gap-4 font-medium">
            Conta <ChevronDown />
          </div>
          <div className="items flex justify-center gap-4">
            2 Items <ShoppingCart />
          </div>
        </section>
      </div>
    </header>
  )
}
