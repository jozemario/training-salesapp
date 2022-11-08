// import { useRouter } from 'next/router';
// import React, { Fragment } from 'react';
// import dynamic from 'next/dynamic';

// const RemoteContentOrders = dynamic(() => import('orders/orders'), {
//     ssr: false,
// });

// const RemoteContentItemcatalogue = dynamic(
//     () => import('itemcatalogue/itemcatalogue'),
//     {
//         ssr: false,
//     }
// );

// export default function Home() {
//     return (
//         <Fragment>
//             <p>Home Page</p>
//             <RemoteContentOrders />
//             <RemoteContentItemcatalogue />
//         </Fragment>
//     );
// }

import dynamic from 'next/dynamic';

const MICRO1 = dynamic(() => import('./itemcatalogue'));
const MICRO2 = dynamic(() => import('./orders'));

const Index = (props) => {
    return (
        <div>
            <h1>Demo2</h1>

            <MICRO1 {...props.page1} />
            <MICRO2 {...props.page2} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const page = import('itemcatalogue/itemcatalogue');
    const { getStaticProps } = await page;

    const props1 = await getStaticProps(context);

    const page2 = import('orders/orders');
    const pageEx = await page2;

    const props2 = await pageEx.getStaticProps(context);

    return {
        props: {
            page1: props1,
            page2: props2,
        },
    };
}

export default Index;
