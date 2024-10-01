"use client"
import Thanks from '@/components/animation/thanks';
import { clearCart } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/store/hooks';
import { useEffect } from 'react';

const PaymentSuccess = () => {
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(clearCart())
    },[])
    return (
        <>
        <Thanks/>
        </>
    );
};

export default PaymentSuccess;