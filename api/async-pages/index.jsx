import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';
// const RemoteContent = dynamic(() => import('remote1/Content'), {
//     ssr: false,
// });

const Home = (props) => {
    console.log('Home:', props);
    const { count, increment, clear, sales, menuItems } = useStore();
    console.log(count, increment, clear, sales, menuItems);
    return (
        <Fragment>
            <p>API MF</p>
            {/* <RemoteContent /> */}
            <h2>`Data from Store ${count}`</h2>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </Fragment>
    );
};

const Wrapper = () => {
    return (
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
};

Home.getInitialProps = async (ctx) => {
    console.log('getInitialProps in async home:', ctx);
    return {};
};

export default Wrapper;
