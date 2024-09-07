
import  { ReactNode } from 'react';
import StoreProvider from './store-provider';
import Footer from '@/components/shared/footer';
import Navbar from '@/components/shared/navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Template = ({children} : {children: ReactNode}) => {

    return (
        <>
        <StoreProvider>
            <ToastContainer/>
            <Navbar/>
            {children}
            <Footer/>
        </StoreProvider>
        </>
    );
};

export default Template;