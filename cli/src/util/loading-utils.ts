// 控制 loading 的工具函数
import ora from 'ora'

let spinner: ora.Ora | null = null

export const showLoading = (msg: string) => {
  spinner = ora(msg).start()
}

export const closeLoading = () => {
  if (spinner != null) {
    spinner.stop()
  }
}
