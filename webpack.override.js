const { resolve } = require('path')

module.exports = (config) => {
    config.resolve = { ...config.resolve }

    config.resolve.alias = {
        ...config.resolve.alias,
        'lib': resolve(__dirname, 'lib/src'),
    }

    const extensions = new Set(config.resolve.extensions || [])

    extensions.add('.ts')
    extensions.add('.tsx')
    extensions.add('.js')
    extensions.add('.scss')

    config.resolve.extensions = Array.from(extensions)

    const ts = config.module.rules
        .map((r) => r.use)
        .map((u) => Array.isArray(u) && u[0])
        .filter((p) => p && p.loader === 'ts-loader')
        .map((l) => l.options)[0]

    if (ts && ts.transpileOnly && process.env.APPLYWORKAROUND) {
        ts.transpileOnly = false
    }

    return config
}
