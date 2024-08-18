import defu from 'defu'
import { antfu } from '@antfu/eslint-config'

import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

function createConfig(
  options: OptionsConfig & TypedFlatConfigItem = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const config: OptionsConfig & TypedFlatConfigItem = {
    rules: {
      'style/comma-dangle': ['error', 'never']
    },
    vue: {
      overrides: {
        'vue/block-order': ['error', {
          order: ['style', 'template', 'script']
        }]
      }
    }
  }

  const mergedOptions = defu(options, config)

  return antfu(mergedOptions, ...userConfigs)
}

export default createConfig
