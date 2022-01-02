import { ComponentWithChildren } from '@global/types/react'
import { useGlobalSettings } from 'store/hooks/useGlobalSettings'

interface NodeCodeProps extends ComponentWithChildren {
  moduleVar?: string
  moduleName?: string
}

export var NodeCode = function ({
  moduleVar,
  moduleName,
  children,
}: NodeCodeProps) {
  const { moduleResolution } = useGlobalSettings()
  let importStatement
  if (moduleVar && moduleName) {
    importStatement =
      moduleResolution === 'cjs'
        ? `import ${moduleVar} from "${moduleName}"`
        : `const ${moduleVar} = require("${moduleName}")`
  }

  return (
    <div className="p-2 bg-dark text-nodeLight-3 rounded">
      <code>{importStatement}</code>
      {children}
    </div>
  )
}
