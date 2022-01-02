import { ModuleSection } from '@components/custom'

import { PageLayout } from '@components/layout'
import { AssertionError } from './submodules'

const AssertPage = function () {
  return (
    <PageLayout subModuleComponents={subRoutes}>
      <ModuleSection
        sectionHeader="AsyncHook"
        subSectionHeaders={[
          'asyncHook.enable()',
          'asyncHook.disable()',
          'async_hooks.executionAsyncResource()',
          'async_hooks.executionAsyncId()',
          'async_hooks.triggerAsyncId()',
          'async_hooks.asyncWrapProviders',
        ]}
      />
      <ModuleSection
        sectionHeader="Hook callbacks"
        subSectionHeaders={[
          'init(asyncId, type, triggerAsyncId, resource)',
          'before(asyncId)',
          'after(asyncId)',
          'destroy(asyncId)',
          'promiseResolve(asyncId)',
        ]}
      />
    </PageLayout>
  )
}

const subRoutes = {
  AsyncHook: <AssertionError />,
  'assert.AssertionError(options)': <AssertionError />,
}

export default AssertPage
