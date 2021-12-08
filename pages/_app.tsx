import * as React from 'react'

import '@styles/globals.css'
import { Provider } from 'react-redux'
import { store } from 'store/store'

const App = ({
  Component,
  pageProps,
}: {
  Component: () => JSX.Element
  pageProps: { [x: string]: any }
}) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
