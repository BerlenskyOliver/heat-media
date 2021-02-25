import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="fr">
                <Head>
                
                    {/* <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/static/favicons/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#4a9885"
                        href="/static/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta name="theme-color" content="#fff" />                    
                    <meta content="#fff" name="msapplication-TileColor" />
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                    <meta
                        content="/static/favicons/browserconfig.xml"
                        name="msapplication-config"
                    /> */}
                </Head>
                    <body className="bg-gray-900">
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        );
    }
}
