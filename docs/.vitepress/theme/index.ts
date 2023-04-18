import DefaultTheme from 'vitepress/theme'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EnhanceAppContext } from 'vitepress'

// import './test.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import CtzFenix from '@ctz-fenix-ui/ctz-fenix-ui'

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(Antd)
    ctx.app.use(CtzFenix)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}

