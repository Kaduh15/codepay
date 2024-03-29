import Aside from '@/components/aside'
import FormPayment from '@/components/form-payment'
import Header from '@/components/header'
import OrderSummary from '@/components/order-summary'
import { ShoppingCartStep } from '@/types'

type HomeProps = {
  searchParams: { step: ShoppingCartStep }
}

export default function Home({ searchParams: { step } }: HomeProps) {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-14 px-5 pt-20">
        <Aside step={step} />
        <section className="flex w-full items-center justify-between gap-24">
          <FormPayment step={step} />
          <OrderSummary />
        </section>
      </main>
    </>
  )
}
