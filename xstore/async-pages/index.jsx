import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// const RemoteContent = dynamic(() => import('remote1/Content'), {
//     ssr: false,
// });

export default function Home() {
    return (
        <Fragment>
            <p>Home Page</p>
            {/* <RemoteContent /> */}
        </Fragment>
    );
}
