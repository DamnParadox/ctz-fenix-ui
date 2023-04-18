<template>
  <ctz-comp :msg="msg"></ctz-comp>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello ctz component')
</script>
