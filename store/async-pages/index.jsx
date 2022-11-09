import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { useStore, StoreProvider, useAppSelector } from '../redux/store';
// const RemoteContent = dynamic(() => import('remote1/Content'), {
//     ssr: false,
// });
import { salesApi } from '../redux/apis/sales.api';
export function Page() {
    const { count, increment, clear, sales, menuItems } = useStore();
    console.log(count, increment, clear, sales, menuItems);

    const salesData = useAppSelector((state) => state.sales);
    const { vendors } = salesApi.useGetVendorsQuery(456);
    const { products } = salesApi.useGetProductsQuery(2345);
    console.log('useGetVendorsQuery:', vendors);
    console.log('useGetProductsQuery:', products);
    console.log('useAppSelector:', salesData);
    //const [createBusinessInfoApi] = businessApi.useCreateBusinessInfoMutation();
    return (
        <Fragment>
            <p>RTK store MF</p>
            `Data from Store ${count}`
            {/* <textarea name="Output" id="" cols="30" rows="10">
                `Data from Store ${count} ${menuItems}`
            </textarea> */}
            {/* <RemoteContent /> */}
        </Fragment>
    );
}

const Wrapper = () => {
    return (
        <StoreProvider>
            <Page />
        </StoreProvider>
    );
};

export default Wrapper;
