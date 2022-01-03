import { NodeLink } from '@components/custom'
import {
  NodeArgsListObject,
  NodeArgsList,
} from '@components/custom/NodeArgsList/NodeArgsList'

export const AssertionErrorOptions = () => {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <h2 className="font-bold text-3xl ">AssertionError(options) -</h2>
          <span className="pl-2 text-2xl italic">
            Options associated with the AssertionError Class.
          </span>
        </div>
        <NodeLink link="https://nodejs.org/dist/latest-v17.x/docs/api/assert.html#class-assertassertionerror" />
      </header>
      <NodeArgsList argObj={optionsConfig} />
    </>
  )
}

const optionsConfig: NodeArgsListObject = {
  name: 'options',
  dataType: 'object',
  children: [
    {
      name: 'message',
      dataType: 'string',
      desc: 'If provided, the error message is set to this value.',
    },
    {
      name: 'actual',
      dataType: 'any',
      desc: 'The actual property on the error instance.',
    },
    {
      name: 'expected',
      dataType: 'any',
      desc: 'The expected property on the error instance.',
    },
    {
      name: 'options',
      dataType: 'string',
      desc: 'The operator property on the error instance.',
    },
    {
      name: 'stackStartFn',
      dataType: 'Function',
      desc: 'If provided, the generated stack trace omits frames before this function.',
    },
  ],
}
