<template>
  <div>
    <h1>ctz-fenix-ui ctz-demo</h1>
    <p>msg is: {{msg}}</p>
    <a-button type="primary" @click="onBtnClick">点击我</a-button>
  </div>
</template>

<script lang="ts" setup name="ctz-comp">
import { defineProps } from 'vue'
import { demoProps } from './types'
import { testLog } from '@ctz-fenix-ui/utils'

defineProps(demoProps)

const onBtnClick = () => {
  console.log('点击按钮测试', demoProps.msg)
  testLog('工具函数');
}
</script>
