import dynamic from 'next/dynamic';
import React from 'react';
const Page = dynamic(
    async () => {
        return import('../async-pages/index');
    },
    {
        ssr: false,
    }
);

const IndexPage = () => <Page />;

export default function Home() {
    return <IndexPage />;
}
