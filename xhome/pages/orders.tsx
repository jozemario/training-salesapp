import dynamic from 'next/dynamic';
import React from 'react';
const Page = dynamic(
    async () => {
        return import('../async-pages/orders');
    },
    {
        ssr: false,
    }
);

const OrdersPage = () => <Page />;

export default function Orders() {
    return <OrdersPage />;
}
