import { NodeDataType } from '..'

export type NodeArgsListObject = {
  name: string
  dataType: string
  desc?: string
  children?: NodeArgsListObject[]
}

interface NodeArgsListProps {
  argObj: NodeArgsListObject
  isChild?: boolean
}

export const NodeArgsList = ({ argObj, isChild }: NodeArgsListProps) => {
  return (
    <ul
      className={`${
        isChild ? 'list-circle' : 'list-disc ml-5'
      } text-lg mx-auto`}
    >
      <li>
        <span className="font-semibold">{argObj.name}</span>{' '}
        <NodeDataType dataType={argObj.dataType} />
        {argObj.desc && <span className="pl-1">{argObj.desc}</span>}
      </li>
      <div className="pl-5">
        {argObj.children?.map((c) => {
          return <NodeArgsList argObj={c} key={c.name} isChild />
        })}
      </div>
    </ul>
  )
}
