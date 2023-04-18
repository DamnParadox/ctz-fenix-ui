import Checkout from './src/checkout.vue'
import { App } from 'vue'

Checkout.name = 'ctz-checkout'

Checkout.install = (app: App): void => {
  // 注册组件
  app.component(Checkout.name, Checkout)
}

export default Checkout
