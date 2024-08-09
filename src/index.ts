import defu from 'defu'
import { antfu, ConfigNames, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'

import type { FlatConfigComposer } from 'eslint-flat-config-utils'

export function createConfig(options: OptionsConfig & TypedFlatConfigItem = {}): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const config: OptionsConfig & TypedFlatConfigItem = {
    rules: {
      "style/comma-dangle": ["error", "never"]
    },
    vue: {
      overrides: {
        "vue/block-order": ["error", {
          order: ["style", "template", "script"]
        }]
      }
    }
  }

  const mergedOptions = defu(options, config)

  return antfu(mergedOptions);
}

export default createConfig
