import { dataTypes } from 'global/meta/dataTypes'

interface NodeDataTypeProps {
  dataType: keyof typeof dataTypes
}

export const NodeDataType = ({ dataType }: NodeDataTypeProps) => {
  const { ref, typeName } = dataTypes[dataType]

  return (
    <a
      href={ref}
      target={'_blank'}
      className="text-nodeDark-3 inline-block hover:bg-black rounded hover:shadow-md hover:text-nodeDark-2 transform-colors duration-150"
      rel="noreferrer"
    >
      {'<'}
      {typeName}
      {'>'}
    </a>
  )
}
