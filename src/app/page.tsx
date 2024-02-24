import Aside from '@/components/aside'
import Header from '@/components/header'
import OrderSummary from '@/components/order-summary'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-5 pt-20">
        <Aside />
        <OrderSummary />
      </main>
    </>
  )
}
