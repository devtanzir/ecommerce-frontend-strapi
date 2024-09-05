'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from '@/lib/store/store';
import { ReactNode } from 'react';

const { store, persistor } = createStore();

const StoreProvider = ({ children } : {children: ReactNode}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};

export default StoreProvider;
