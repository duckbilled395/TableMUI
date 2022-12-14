import React from 'react';

import './Footer.scss'
import QuantityTotal from "../../QuantityTotal/QuantityTotal";
import VolumeTotal from "../../VolumeTotal/VolumeTotal";
import {Button} from "@mui/material";
import {useActions} from "../../../store";

const Footer: React.FC = () => {
  const {setCancel} = useActions()


  return (
    <footer className='footer'>
      <QuantityTotal/>
      <VolumeTotal/>
      <Button onClick={() => setCancel(true)} variant="contained">Аннулировать</Button>
    </footer>
  );
};

export default Footer;