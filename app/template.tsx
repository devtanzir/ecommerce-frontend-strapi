import Header from '@/components/shared/header';
import  { FC } from 'react';
import StoreProvider from './store-provider';
interface ChildrenProps {
    children: React.ReactNode;
  }
const Template:FC<ChildrenProps> = ({children}) => {

    return (
        <>
        <StoreProvider>
            <Header />
            {children}
        </StoreProvider>
        </>
    );
};

export default Template;