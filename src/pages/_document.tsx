import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='antialiased font-sans bg-gradient-to-tr from-slate-800 to-slate-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
