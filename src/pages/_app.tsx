import '../styles/global.css'

interface MyappInput {
  Component: any
  pageProps: any
}
function Myapp({ Component, pageProps }: MyappInput) {
  return (
        <Component {...pageProps}/>
  )
}

export default Myapp

