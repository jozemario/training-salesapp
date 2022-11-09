// function MyApp({ Component, pageProps }) {
//     return <Component {...pageProps} />;
// }

// export default MyApp;

import App from 'next/app';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (ctx) => {
    const appProps = await App.getInitialProps(ctx);
    console.log('getInitialProps', appProps);
    return appProps;
};
export default MyApp;
