import Header from '@/components/shared/header';
import  { FC } from 'react';
interface ChildrenProps {
    children: React.ReactNode;
  }
const Template:FC<ChildrenProps> = ({children}) => {

    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default Template;