import fs from 'fs'
import path from 'path'

export default function VitePluginMicroApp() {
  let basePath = ''
  return {
    name: 'vite:micro-app',
    apply: 'build',
    configResolved(config) {
      basePath = `${config.base}${config.build.assetsDir}/`
    },
    writeBundle(options, bundle) {
      for (const chunkName in bundle) {
        const chunk = bundle[chunkName]
        if (chunk.fileName && chunk.fileName.endsWith('.js')) {
          chunk.code = chunk.code.replace(
            /(from|import\()(\s*['"])(\.\.?\/)/g,
            (_, $1, $2, $3) => $1 + $2 + new URL($3, basePath).href
          )
          fs.writeFileSync(path.join(options.dir, chunk.fileName), chunk.code)
        }
      }
    }
  }
}