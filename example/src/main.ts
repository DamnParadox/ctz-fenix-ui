import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ctzFenix from '@ctz-fenix-ui/ctz-fenix-ui'

createApp(App)
  .use(antd)
  .use(ctzFenix)
  .mount('#app')
