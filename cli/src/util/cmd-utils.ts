// 封装 shelljs 库的 execCmd 函数
// shelljs库：执行 cmd 命令，如 cd、pnpm install 等
import shelljs from 'shelljs'
import { closeLoading } from './loading-utils'

export const execCmd = (cmd: string) => new Promise((resolve, reject) => {
  shelljs.exec(cmd, (err, stdout, stderr) => {
    if (err) {
      closeLoading()
      reject(new Error(stderr))
    }
    return resolve('')
  })
})
