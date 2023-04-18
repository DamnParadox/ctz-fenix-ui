import CtzInput from '@ctz-fenix-ui/ctz-input'
import { App } from 'vue'
import ctzComp from '@ctz-fenix-ui/demo'

const components = [
  ctzComp,
  CtzInput
]

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
