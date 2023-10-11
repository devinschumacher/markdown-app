const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const { version } = require('../package.json')

const getEnvironmentDefinitions = function () {
  let shortHash = 'N/A'
  let fullHash = 'N/A'
  try {
    const gitRevisionPlugin = new GitRevisionPlugin()
    shortHash = gitRevisionPlugin.version()
    fullHash = gitRevisionPlugin.commithash()
  } catch(_) {
    // Ignore error if we build without git.
  }

  const isStableRelease = !!process.env.serpdown_IS_STABLE
  const versionSuffix = isStableRelease ? '' : ` (${shortHash})`
  return {
    'global.serpdown_GIT_SHORT_HASH': JSON.stringify(shortHash),
    'global.serpdown_GIT_HASH': JSON.stringify(fullHash),

    'global.serpdown_VERSION': JSON.stringify(version),
    'global.serpdown_VERSION_STRING': JSON.stringify(`v${version}${versionSuffix}`),
    'global.serpdown_IS_STABLE': JSON.stringify(isStableRelease)
  }
}

const getRendererEnvironmentDefinitions = function () {
  const env = getEnvironmentDefinitions()
  return {
    'process.versions.serpdown_VERSION': env['global.serpdown_VERSION'],
    'process.versions.serpdown_VERSION_STRING': env['global.serpdown_VERSION_STRING'],
  }
}

module.exports = {
  getEnvironmentDefinitions: getEnvironmentDefinitions,
  getRendererEnvironmentDefinitions: getRendererEnvironmentDefinitions
}
