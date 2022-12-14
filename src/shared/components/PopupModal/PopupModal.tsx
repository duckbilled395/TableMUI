import React from 'react';
import {Button} from "@mui/material";
import {Dispatch} from "redux";

import PopupInfo from "../PopupInfo/PopupInfo";
import {MainReducerActionTypes, SetCancelType} from "../../store/types/mainTypes";

import './PopupModal.scss'

type PropsType = {
  data: (string | undefined)[] | [] | undefined,
  docsId: (string | undefined)[],
  sendDocs: (docsId: (string | number | undefined)[]) => (dispatch: Dispatch<MainReducerActionTypes>) => Promise<void>,
  setCancel: (isCancel: boolean) => SetCancelType
}

const PopupModal: React.FC<PropsType> = ({data, docsId, sendDocs, setCancel}) => {
  return (
    <div className='modal'>
      <Button variant="contained" onClick={() => setCancel(false)}>Назад</Button>
      <PopupInfo data={data} docsId={docsId} sendDocs={sendDocs} setCancel={setCancel}/>
    </div>
  );
};

export default PopupModal;
