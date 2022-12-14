import React from 'react';
import {Button} from "@mui/material";

import {useActions} from "../../store";
import PopupInfo from "../PopupInfo/PopupInfo";

import './PopupModal.scss'

const PopupModal = () => {
    const {setCancel} = useActions()
    return (
        <div className='modal'>
            <PopupInfo />
            <Button variant="contained" onClick={() => setCancel(false)}>Return</Button>
        </div>
    );
};

export default PopupModal;
