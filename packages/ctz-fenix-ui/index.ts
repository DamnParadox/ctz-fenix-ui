// 所有组件注册入口文件
import { App } from 'vue'
import CtzInput from '@ctz-fenix-ui/ctz-input'
import ctzComp from '@ctz-fenix-ui/demo'
import Checkout from '@ctz-fenix-ui/checkout'
import Radio from '@ctz-fenix-ui/radio'
import Switch from '@ctz-fenix-ui/switch'
// import component end
const components = [
  ctzComp,
  CtzInput,
  Checkout,
  Radio,
  Switch
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
