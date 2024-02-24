import Image from 'next/image'

import { Minus, Plus } from 'lucide-react'

import mouse from '../../assets/mouse.jpeg'

export default function OrderSummary() {
  return (
    <section className="space-y-12 font-medium">
      <h2 className="text-xl font-semibold text-slate-800">Resumo do Pedido</h2>
      <section className="space-y-5">
        <div>
          <Image
            src={mouse}
            alt="Imagem do Produto"
            width={484}
            height={150}
            className="h-[150px] w-[484px] rounded-xl object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-2.5">
            <h3 className="text-lg font-medium">Mouse Gamer Redragon</h3>
            <p className="text-lg font-bold">R$ 15,22</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="rounded-md bg-zinc-100 p-2 text-slate-400">
              <Plus />
            </button>
            <span>1</span>
            <button className="rounded-md bg-zinc-100 p-2 text-slate-400">
              <Minus />
            </button>
          </div>
        </div>

        <section className="w-full space-y-5">
          <form action="#" className="flex w-full justify-between">
            <input
              type="text"
              placeholder="Cupom de Desconto"
              className="rounded-md bg-zinc-100 px-5 py-4 text-slate-400"
            />
            <button className="rounded border-2 border-green-500 px-5 py-4 text-green-500">
              Aplicar
            </button>
          </form>
          <div className="grid w-full grid-cols-2 grid-rows-3 gap-4">
            <p className="text-start text-slate-500">Taxa</p>
            <p className="text-end">R$ 3,45</p>
            <p className="text-slate-500">Envio</p>
            <p className="text-end text-[value='Grátis'] text-green-500">
              Grátis
            </p>
            <p className="text-lg font-semibold">Total</p>
            <p className="text-end text-lg font-semibold">R$ 18,67</p>
          </div>
        </section>
      </section>
    </section>
  )
}
