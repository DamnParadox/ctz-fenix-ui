import CtzInput from '@ctz-fenix-ui/ctz-input'
import { App } from 'vue'
import ctzComp from '@ctz-fenix-ui/demo'
import Checkout from '@ctz-fenix-ui/checkout'
// import component end
const components = [
  ctzComp,
  CtzInput,
  Checkout
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
