import Link from 'next/link'

export default function AccountStep() {
  return (
    <>
      <h3>Detalhes da conta</h3>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
      </div>

      <div>
        <Link rel="stylesheet" href="#">
          Registrar conta
        </Link>
        <button>Entrar</button>
      </div>
    </>
  )
}
