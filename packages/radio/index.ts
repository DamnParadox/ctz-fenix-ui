import Radio from './src/radio.vue'
import { App } from 'vue'

Radio.name = 'ctz-radio'

Radio.install = (app: App): void => {
  // 注册组件
  app.component(Radio.name, Radio)
}

export default Radio
