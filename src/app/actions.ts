'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export async function setPrice(data: FormData) {
  const aprovado = data.get('aprovado')

  if (aprovado === 'true') {
    cookies().set({
      name: 'price',
      value: 'GRÁTIS',
      path: '/',
    })
    revalidatePath('/')
  }
}
