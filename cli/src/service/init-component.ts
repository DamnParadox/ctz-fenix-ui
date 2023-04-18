// 一、创建新组件模块，二、创建新组件样式先省略
// 需要导出函数 initComponent, 函数任务如下：
/**
  1.创建新组件的目录；
  2.使用 pnpm init 初始化 package.json 文件；
  3.修改 package.json 的 name 属性；
  4.安装通用工具包 @ctz-fenix-ui/utils 到依赖中；
  5.创建 src 目录；
  6.在 src 目录中创建组件本体文件 xxx.tsx 或 xxx.vue；
  7.在 src 目录中创建 types.ts 文件；
  8.创建组件入口文件 index.ts。
*/

import { ComponentInfo } from '../domain/component-info'
import fs from 'fs'
import * as path from 'path'
import { indexTemplate, sfcTemplate, tsxTemplate, typesTemplate } from '../util/template-utils'
import { g } from '../util/log-utils'
import { execCmd } from '../util/cmd-utils'
import { UISetting } from '../uiSetting'

export const initComponent = (componentInfo: ComponentInfo) => new Promise((resolve, reject) => {
  if (fs.existsSync(componentInfo.fullPath)) {
    return reject(new Error('组件已存在'))
  }

  // 1. 创建组件根目录
  fs.mkdirSync(componentInfo.fullPath)

  // 2. 初始化 package.json
  execCmd(`cd ${componentInfo.fullPath} && pnpm init`).then(r => {
    // 3. 修改 package.json
    updatePackageJson(componentInfo)

    // 4. 安装 utils 依赖
    execCmd(`cd ${componentInfo.fullPath} && pnpm install @${UISetting.COMPONENT_LIB_NAME}/utils`)

    // 5. 创建组件 src 目录
    fs.mkdirSync(path.resolve(componentInfo.fullPath, 'src'))

    // 6. 创建 src/xxx.vue 或s src/xxx.tsx
    createSrcIndex(componentInfo)

    // 7. 创建 src/types.ts 文件
    createSrcTypes(componentInfo)

    // 8. 创建 index.ts
    createIndex(componentInfo)

    g('component init success')

    return resolve(componentInfo)
  }).catch(e => {
    return reject(e)
  })
})

// 修改 package.json
const updatePackageJson = (componentInfo: ComponentInfo) => {
  const { lineName, fullPath, nameWithLib } = componentInfo
  const packageJsonPath = `${fullPath}/package.json`
  if (fs.existsSync(packageJsonPath)) {
    let content = fs.readFileSync(packageJsonPath).toString()
    content = content.replace(lineName, nameWithLib)
    fs.writeFileSync(packageJsonPath, content)
  }
}

// 创建组件的本体 xxx.vue
const createSrcIndex = (componentInfo: ComponentInfo) => {
  let content = ''
  if (componentInfo.type === 'vue') {
    content = sfcTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName)
  } else {
    content = tsxTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName)
  }
  const fileFullName = `${componentInfo.fullPath}/src/${componentInfo.lineName}.${componentInfo.type}`
  fs.writeFileSync(fileFullName, content)
}

// 创建 src/types.ts 文件
const createSrcTypes = (componentInfo: ComponentInfo) => {
  const content = typesTemplate(componentInfo.lowCamelName, componentInfo.upCamelName)
  const fileFullName = `${componentInfo.fullPath}/src/types.ts`
  fs.writeFileSync(fileFullName, content)
}

// 创建 index.ts
const createIndex = (componentInfo: ComponentInfo) => {
  fs.writeFileSync(`${componentInfo.fullPath}/index.ts`, indexTemplate(componentInfo))
}
