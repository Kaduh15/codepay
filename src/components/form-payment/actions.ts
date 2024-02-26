'use server'

import { redirect } from 'next/navigation'

export async function accountStepFormAction() {
  redirect('/?step=2')
}

export async function shippingStepFormAction() {
  redirect('/?step=3')
}

export async function paymentStepFormAction() {
  redirect('/payment?status=success')
}
