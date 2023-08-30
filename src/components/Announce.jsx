import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Announce = () => {
    const [isHidden, setIsHidden] = useState(false);

    const announceStyle = `bg-[#8a4af3] flex items-center justify-center font-bold text-white ${isHidden ? 'hidden' : ''}`;

    const handleClose = () => {
        setIsHidden(true);
    };

    return (
        <div className={announceStyle}>
            <h2>Hurry up, it's 40% off now</h2>
            <CloseIcon className='cursor-pointer' onClick={handleClose} />
        </div>
    );
};

export default Announce;
