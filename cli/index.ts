#!/usr/bin/env node

import { mainEntry } from './src'

console.log('hello cli!')

mainEntry()
// 该文件第一行不能省略，这句话的意思是使用 node 来执行这个文件，
// 并且在 /use/bin/env 环境变量中去找 node 执行器。
