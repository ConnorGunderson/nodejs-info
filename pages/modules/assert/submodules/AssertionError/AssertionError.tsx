import { NodeCode, NodeLink } from '@components/custom'

export const AssertionError = () => {
  return (
    <section className="flex flex-col">
      <header className="flex justify-between">
        <div className="flex items-end">
          <h2 className="font-bold text-3xl">AssertionError -</h2>
          <span className="pl-2 text-2xl">
            Main class of the <i>"assert"</i> module
          </span>
        </div>
        <NodeLink link="https://nodejs.org/dist/latest-v17.x/docs/api/assert.html#class-assertassertionerror" />
      </header>
      <p className="py-5">
        Error's thrown by the assert module within nodejs will be an instance of
        an AssertionError
      </p>
      <NodeCode moduleVar="assert" moduleName="assert">
        <code>assert.AssertionError</code>
      </NodeCode>
    </section>
  )
}
