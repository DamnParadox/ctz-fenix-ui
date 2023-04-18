import { App } from 'vue'
import ctzComp from './src/index.vue'

ctzComp.install = (app: App) => {
  app.component(ctzComp.name, ctzComp)
}

export default ctzComp
