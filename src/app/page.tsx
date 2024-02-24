import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
      </main>
    </>
  )
}
