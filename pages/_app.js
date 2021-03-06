import '../styles/globals.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />

      </RecoilRoot>

    </SessionProvider>

  )

}

export default MyApp
