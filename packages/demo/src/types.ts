// ExtractPropTypes作用是将props的类型定义抽取出来供外部使用
import { ExtractPropTypes } from 'vue'

export const demoProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  }
}

export type DemoProps = ExtractPropTypes<typeof demoProps>
