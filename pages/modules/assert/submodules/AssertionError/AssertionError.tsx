import { NodeCode, NodeLink } from '@components/custom'

export const AssertionError = () => {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <h2 className="font-bold text-3xl">AssertionError -</h2>
          <span className="pl-2 text-2xl">
            Main class of the <i>"assert"</i> module
          </span>
        </div>
        <NodeLink link="https://nodejs.org/dist/latest-v17.x/docs/api/assert.html#class-assertassertionerror" />
      </header>
      <p className="py-5">
        Error's thrown by the assert module within nodejs will be an instance of
        an AssertionError.
      </p>
      <NodeCode moduleImports={[['assert', 'assert']]}>{example}</NodeCode>
    </>
  )
}

const example = `
const { message } = new assert.AssertionError({  
  actual: 1,
  expected: 2,
  operator: "strictEqual", 
})

try {
  assert.strictEqual(1, 2) // FAILURE, the resulting error will be the same as above
} catch(err) {
  assert(err instanceof assert.AssertionError)
  assert.strictEqual(err.message, message)
  assert.strictEqual(err.name, 'AssertionError');
  assert.strictEqual(err.actual, 1);
  assert.strictEqual(err.expected, 2);
  assert.strictEqual(err.code, 'ERR_ASSERTION');
  assert.strictEqual(err.operator, 'strictEqual');
  assert.strictEqual(err.generatedMessage, true);
}
`
