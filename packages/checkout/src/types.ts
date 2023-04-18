import { ExtractPropTypes } from 'vue'

export const checkoutProps = {
} as const

export type CheckoutProps = ExtractPropTypes<typeof checkoutProps>
