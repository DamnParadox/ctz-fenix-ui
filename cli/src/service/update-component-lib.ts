// 三、将新组件模块安装到组件库入口模块的依赖中
// 需要导出函数 updateComponentLib。该函数需要完成两件事：
// 1.在组件库入口模块中安装新组件为依赖；
// 2.更新组件库入口模块的 index.ts 文件，引入新组件。

import { ComponentInfo } from '../domain/component-info'
import { execCmd } from '../util/cmd-utils'
import path from 'path'
import { UISetting } from '../uiSetting'
import fs from 'fs'
import { g } from '../util/log-utils'

// 更新组件库入口
export const updateComponentLib = async (componentInfo: ComponentInfo) => {
  // 组件库入口的路径
  const libPath = path.resolve(componentInfo.parentPath, UISetting.COMPONENT_LIB_NAME)

  // 1. 添加新创建的组件到依赖中
  await execCmd(`cd ${libPath} && pnpm install ${componentInfo.nameWithLib}`)

  // 2. 更新入口 index.ts
  updateComponentLibIndex(libPath, componentInfo)

  g('component library update success')
}

const updateComponentLibIndex = (libPath: string, componentInfo: ComponentInfo) => {
  const indexPath = path.join(libPath, 'index.ts')
  const content = fs.readFileSync(indexPath).toString()

  const index1 = content.indexOf('// import component end')
  const index2 = content.indexOf('] // components')

  const result = `${content.substring(0, index1)}` +
    `import ${componentInfo.upCamelName} from '${componentInfo.nameWithLib}'\n` +
    content.substring(index1, index2 - 2) +
    `,\n  ${componentInfo.upCamelName}\n` +
    content.substring(index2)

  fs.writeFileSync(indexPath, result)
}
