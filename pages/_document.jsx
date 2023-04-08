import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="bg-cover bg-center bg-fixed" style={{}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
