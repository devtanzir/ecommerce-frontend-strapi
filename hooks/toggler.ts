import { useState } from 'react';

const useToggler = () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(prev => !prev)
    }

    return { open, handleToggle };
};

export default useToggler;