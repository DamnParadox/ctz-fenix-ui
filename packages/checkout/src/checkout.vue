<template>
  <div>
    ctz-checkout
  </div>
</template>

<script lang="ts" setup name="ctz-checkout">
import { defineProps } from 'vue'
import { checkoutProps } from './types'

defineProps(checkoutProps)
</script>

<style scoped lang="less">
.ctz-checkout {
}
</style>
