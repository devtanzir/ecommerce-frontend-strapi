import LKV from '@/components/ui/list-key-value';
import useToggler from '@/hooks/toggler';
import Close from '@/public/icons/close';
import Eye from '@/public/icons/eye';

const OrderDetails = ({order}:{order:any}) => {
    console.log(order, "this is order");
    const {handleToggle,open} = useToggler()
    return (
        <div className="mx-auto w-fit">
            <button onClick={handleToggle}>
                    <Eye/>
                  </button>
            <div onClick={handleToggle} className={`fixed z-[100] w-screen ${open ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 `}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute max-w-md max-h-[700px] popover-content-scroll overflow-y-scroll scroll-smooth rounded-lg bg-white p-6 drop-shadow-lg ${open ? 'opacity-1 duration-300' : 'scale-110 opacity-0 duration-150'}`}>
                    <Close onClick={handleToggle} className="absolute right-3 top-3 w-6 cursor-pointer fill-black"/>
                    <h1 className="mb-2 text-2xl font-semibold">Delivery Details</h1>
                    <div className='p-5 bg-slate-100 rounded mb-2 flex flex-col gap-5'>
<LKV keyName='Name' value={order.attributes.deliveryDetails.customerName}/>
                    <LKV keyName='Email' value={order.attributes.deliveryDetails.customerEmail}/>
                    <LKV keyName='Phone' value={order.attributes.deliveryDetails.phone}/>
                    <LKV keyName='Address' value={order.attributes.deliveryDetails.address}/>
                    <LKV keyName='Shipping' value={order.attributes.deliveryDetails.shippingCost}/>
                    <LKV keyName='Delivery Method' value={order.attributes.deliveryDetails.deliveryMethod}/>
                    <LKV keyName='Payment Method' value={order.attributes.deliveryDetails.paymentMethod}/>
                    </div>
                    <h1 className="mb-2 text-2xl font-semibold">Ordered Item</h1>
                    <ul className='flex flex-col gap-5 mb-2'>
                        {
                        order?.attributes?.products.map((item:any) => (
                            <li className='bg-gray-100 rounded p-5 flex flex-col gap-3'> 
                                <LKV keyName='Name' value={item.name}/>
                                <LKV keyName='Price' value={item.price}/>
                                <LKV keyName='Quantity' value={item.quantity}/>
                            </li>
                        ))
                    }
                    </ul>
                    
                    <div className="flex justify-end gap-2">
                        <button onClick={handleToggle} className="rounded-md bg-cyan-100 px-6 py-[6px] text-cyan-800 hover:bg-cyan-200">
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default OrderDetails;
