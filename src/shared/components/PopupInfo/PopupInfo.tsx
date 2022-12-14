import React from 'react';
import {Button} from "@mui/material";
import {Dispatch} from "redux";

import {MainReducerActionTypes, SetCancelType} from "../../store/types/mainTypes";

import './PopupInfo.scss'

type PropsType = {
  data: (string | undefined)[] | [] | undefined,
  docsId: (string | undefined)[],
  sendDocs: (docsId: (string | number | undefined)[]) => (dispatch: Dispatch<MainReducerActionTypes>) => Promise<void>,
  setCancel: (isCancel: boolean) => SetCancelType
}


const PopupInfo: React.FC<PropsType> = ({data, docsId, sendDocs, setCancel}) => {
  const items = data && data.map((item, i) => {
    if (i !== data.length - 1) {
      return <span key={item}>{item}, </span>
    } else {
      return <span key={item}>{item}.</span>
    }
  })

    return (
        <div className='popupInfo'>
            <div className='info'>
              Вы уверены что хотите аннулировать товар(ы): {items}
            </div>
            <div className='btns'>
              <div className='btn'><Button variant="contained" onClick={() => sendDocs(docsId)} >Применить</Button></div>
              <div className='btn'><Button variant="contained" onClick={() => setCancel(false)}>Отклонить</Button></div>
            </div>
        </div>
    );
};

export default PopupInfo;