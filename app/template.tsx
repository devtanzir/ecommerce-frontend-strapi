import Header from '@/components/shared/header';
import  { ReactNode } from 'react';
import StoreProvider from './store-provider';
import Footer from '@/components/shared/footer';

const Template = ({children} : {children: ReactNode}) => {

    return (
        <>
        <StoreProvider>
            <Header />
            {children}
            <Footer/>
        </StoreProvider>
        </>
    );
};

export default Template;