import Aside from '@/components/aside'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-5 pt-20">
        <Aside />
      </main>
    </>
  )
}
