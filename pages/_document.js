import Document, { Html, Head, Main, NextScript } from 
'next/document'

class MyDocument extends Document {
  render() {
    return (
        <Html lang='en'>
          <Head />
           <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <body className="bg-white">
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument