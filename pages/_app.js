import '../styles/globals.css'
import Head from '../components/Head';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
