const fs = require('fs')

fs.copyFileSync(
  'bugfix/vuepress/lib/prepare/codegen.js',
  'node_modules/vuepress/lib/prepare/codegen.js'
)

console.log('copy file success')
