import { ComponentWithChildren } from '@global/types/react'
import { useGlobalSettings } from 'store/hooks/useGlobalSettings'

interface NodeCodeProps extends ComponentWithChildren {
  moduleImports?: Array<[string, string]>
}

export var NodeCode = function ({ moduleImports, children }: NodeCodeProps) {
  const { moduleResolution } = useGlobalSettings()

  const importStatements = moduleImports?.map((mImport) => {
    return moduleResolution === 'cjs'
      ? `import ${mImport[0]} from "${mImport[1]}"`
      : `const ${mImport[0]} = require("${mImport[1]}")`
  })

  return (
    <div className="p-3 shadow-md bg-dark text-nodeLight-3 rounded-xl">
      {importStatements?.map((s) => (
        <code key={s}>{s}</code>
      ))}
      <pre>{children}</pre>
    </div>
  )
}
