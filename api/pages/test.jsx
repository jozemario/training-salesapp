import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { StoreProvider, useStore } from 'store/store';
import { client } from '../components/be/database/src/interface';
// const RemoteContent = dynamic(() => import('remote1/Content'), {
//     ssr: false,
// });

const Home = (props) => {
    console.log('Home:', props);
    const { count, increment, clear, sales, menuItems } = useStore();
    console.log(count, increment, clear, sales, menuItems);
    return (
        <Fragment>
            <p>TEST MF</p>
            {/* <RemoteContent /> */}
            <h2>`Data from Store ${count}`</h2>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </Fragment>
    );
};

export const getStaticProps = async () => {
    const stores = await client().user.findMany();
    console.log('getStaticProps:', stores);

    return {
        props: { stores },
        revalidate: 10,
    };
};

const Wrapper = () => {
    return (
        <StoreProvider>
            <Home />
        </StoreProvider>
    );
};

export default Wrapper;
