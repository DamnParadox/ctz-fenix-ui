import { ExtractPropTypes } from 'vue'

export const ctzInputProps = {
} as const

export type CtzInputProps = ExtractPropTypes<typeof ctzInputProps>
