import Layout from '../components/layout/BaseLayout';
// import SimpleLayout from '../components/layout/simple'
//import '../assets/global.css'
import 'antd/dist/antd.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <SimpleLayout> */}
      <Layout>
        <Component {...pageProps} />
        </Layout>
      {/* </SimpleLayout> */}
    </>
  )
}
