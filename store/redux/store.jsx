import React from 'react';
import {
    Action,
    configureStore,
    createSlice,
    ThunkAction,
} from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { counterSlice } from './slices/main.slice';
import { salesSlice } from './slices/sales.slice';
import { salesApi } from './apis/sales.api';

const { increment, clear } = counterSlice.actions;
const { add, reset } = salesSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        //sales: salesSlice.reducer,
        salesSlice: salesSlice,
        [salesApi.reducerPath]: salesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(salesApi.middleware),
});

export function useStore() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    const imgSrc = useSelector((state) => state.counter.imgSrc);
    const menuItems = useSelector((state) => state.counter.menuItems);
    const sales = useSelector((state) => state.sales);
    const salesActions = { add, reset };
    //

    return {
        menuItems,
        imgSrc,
        count,
        increment: () => dispatch(increment()),
        clear: () => dispatch(clear()),
        sales,
        salesActions,
    };
}

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;
export function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
