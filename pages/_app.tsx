import { ManagedMusicContext } from 'context/MusicContext'
import { ManagedPlaylistContext } from 'context/PlaylistContext'
import { ManagedUIContext } from 'context/UiContext'
import type { AppProps } from 'next/app'
import { FC } from 'react'

import 'styles/globals.css'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
      <ManagedUIContext>
        <ManagedPlaylistContext>
          <ManagedMusicContext>
            <Layout pageProps={pageProps}>
              <Component {...pageProps} />
            </Layout>
          </ManagedMusicContext>
        </ManagedPlaylistContext>
      </ManagedUIContext>
      
  )
}

export default MyApp
