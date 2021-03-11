import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Provider } from 'react-redux'
import { useStore } from 'redux/store'
import Portal from '@material-ui/core/Portal';

import 'styles/globals.css'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)

  const Layout = (Component as any).Layout || Noop
  const Modal = (Component as any).Modal || Noop

  return (
    <Provider store={store}>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
        <Portal>
          <Modal/>
        </Portal>
      </Layout>
    </Provider>
  )
}

export default MyApp
