import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

// ================*******************====================

// export default class MyDocument extends Document{
//   static getInitialProps ({renderPage}) {
//     console.log(renderPage)
//     const sheet = new ServerStyleSheet();
//     const page = renderPage(App => props => 
//       sheet.collectStyles(<App {...props} />))
//     const styleTags = sheet.getStyleElement()
//     return {...page, styleTags}
//   }

//   render() {
//     return(
//       <html>
//         <Head>
//           <meta charSet={process.env.CHARSET}/>
//           <meta name = "viewport" content="width=device-width, initial-scale=1"/>
//           <body>
//             hi
//           </body>
//         </Head>
//       </html>
//     )
//   }
// }

// ===================********************====================