import { ClassHeading, ModuleSection, SubHeading } from '@components/custom'
import styles from './assert.module.css'
const AssertPage = () => {
  return (
    <section className="inline-flex flex-1 w-full">
      <div className="w-2/5 flex flex-col overflow-scroll">
        <ModuleSection
          sectionHeader="AssertionError"
          subSectionHeaders={['assert.AssertionError(options)']}
        />
        <ModuleSection
          sectionHeader="AssertionError"
          subSectionHeaders={[
            'assert.CallTracker()',
            'tracker.calls([fn][, exact])',
            'tracker.report()',
            'tracker.verify()',
          ]}
        />
        <ModuleSection
          subSectionHeaders={[
            'assert(value[, message])',
            'assert.deepEqual(actual, expected[, message])',
            'assert.deepStrictEqual(actual, expected[, message])',
            'assert.doesNotMatch(string, regexp[, message])',
            'assert.doesNotReject(asyncFn[, error][, message])',
            'assert.doesNotThrow(fn[, error][, message])',
            'assert.equal(actual, expected[, message])',
            'assert.fail([message])',
            'assert.fail(actual, expected[, message[, operator[, stackStartFn]]])',
            'assert.ifError(value)',
            'assert.match(string, regexp[, message])',
            'assert.notDeepEqual(actual, expected[, message])',
            'assert.notDeepStrictEqual(actual, expected[, message])',
            'assert.notEqual(actual, expected[, message])',
            'assert.notStrictEqual(actual, expected[, message])',
            'assert.ok(value[, message])',
            'assert.rejects(asyncFn[, error][, message])',
            'assert.strictEqual(actual, expected[, message])',
            'assert.throws(fn[, error][, message])',
          ]}
        />
      </div>
      <div className="w-3/5 shadow-inner p-4">hey</div>
    </section>
  )
}

export default AssertPage
