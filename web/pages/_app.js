import '../styles/globals.css'
import app from '../utils/inits'
import { db } from '../firebase'
import '../styles/calendar.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
