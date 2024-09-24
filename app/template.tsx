
import  { ReactNode } from 'react';
import StoreProvider from './store-provider';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './_components/header/navbar';
import Footer from './_components/footer/footer';

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