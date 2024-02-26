import { cookies } from 'next/headers'
import Image from 'next/image'

import { setPrice } from '@/app/actions'
import { Minus, Plus } from 'lucide-react'

import mouse from '../../assets/mouse.jpeg'
import Button from '../ui/button'

export default async function OrderSummary() {
  const price = cookies().get('price')?.value || 'R$ 15,22'

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
            <p className="text-lg font-bold">{price}</p>
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
          <form
            action={setPrice}
            className="flex w-full flex-col justify-between gap-4"
          >
            <div className="flex w-full justify-between gap-4">
              <input
                type="text"
                name="cupom"
                placeholder="Cupom de Desconto"
                className="rounded-md bg-zinc-100 px-5 py-4 text-slate-400"
              />
              <Button
                variants={{
                  style: 'outline',
                  size: 'lg',
                }}
              >
                Aplicar
              </Button>
            </div>
            <div className="space-y-4 border p-4">
              <p className="text-xl font-medium">Cupons ativos</p>
              <Button
                variants={{
                  style: 'link',
                }}
                name="aprovado"
                value="true"
                className="animate-treme animate-iteration-3 border border-green-500 text-green-500
                underline hover:bg-green-100"
              >
                #AprovadoParaVaga
              </Button>
            </div>
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
