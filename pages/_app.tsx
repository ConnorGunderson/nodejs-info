import * as React from 'react'

import '@styles/globals.css'

const App = ({
  Component,
  pageProps,
}: {
  Component: () => JSX.Element
  pageProps: { [x: string]: any }
}) => {
  return <Component {...pageProps} />
}

export default App
