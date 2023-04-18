import CtzInput from './src/ctz-input.vue'
import { App } from 'vue'

CtzInput.name = 'ctz-ctz-input'

CtzInput.install = (app: App): void => {
  // 注册组件
  app.component(CtzInput.name, CtzInput)
}

export default CtzInput
