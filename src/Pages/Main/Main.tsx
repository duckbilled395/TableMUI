import React, {useEffect, useState} from 'react';

import './Main.scss'
import Header from "../../shared/components/Layout/Header/Header";
import Footer from "../../shared/components/Layout/Footer/Footer";
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useActions, useAppSelector} from "../../shared/store";
import {CurrencyType} from "../../shared/store/types/mainTypes";
import PopupModal from "../../shared/components/PopupModal/PopupModal";
import {requestSendDocs} from "../../shared/store/actions/mainActions";


const Main: React.FC = () => {

    const {setDocs, setChosenDocs, requestDocs, setCancel, requestSendDocs} = useActions()
    const documents = useAppSelector(state => state.main.documents)
    const isCancel = useAppSelector(state => state.main.isCancel)
    const chosenDocuments = useAppSelector(state => state.main.chosenDocuments)
    const [rows, setRows] = useState(documents)

    useEffect(() => {
        // requestDocs(MainAPITypes.documents1)
        // requestDocs(MainAPITypes.documents2)

        // Mock-values for test
        setDocs({
            id: '1',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName1',
            delivery_date: '2015-03-26',
            currency: 'currency'
        })
        setDocs({
            id: '2',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName2',
            delivery_date: '2015-03-26',
            currency: CurrencyType.JPY
        })
        setDocs({
            id: '3',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName3',
            delivery_date: '2015-03-26',
            currency: CurrencyType.GBP
        })
        setDocs({
            id: '4',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName4',
            delivery_date: '2015-03-26',
            currency: CurrencyType.EUR
        })
        setDocs({
            id: '5',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName5',
            delivery_date: '2015-03-27',
            currency: CurrencyType.USD
        })
    }, [])

    const getNamesOfChosenItems = () => {
        let names = chosenDocuments.map(id => {
            return documents.map(item => {
                if (item.id === id) {
                    return item.name
                }
            })
        }).flat().filter(item => item !== undefined)
        return names
    }

    const getDocsIdToSend = () => {
        let docsId = chosenDocuments.map(id => {
            return documents.map(item => {
                if (item.id === id) {
                    return item.id
                }
            })
        }).flat().filter(item => item !== undefined)
        return docsId
    }
    console.log(getDocsIdToSend())


    useEffect(() => {
        const docsWithDate = documents.map(item => ({...item, delivery_date: new Date(item.delivery_date)}))
        const docsWithTotal = docsWithDate.map(item => ({...item, total: item.sum + item.qty + ' ' + item.currency}))
        setRows(docsWithTotal)

    }, [documents])

    const columns = [
        {field: 'status', headerName: 'status', width: 150},
        {field: 'sum', headerName: 'sum', width: 150},
        {field: 'qty', headerName: 'qty', width: 150},
        {field: 'volume', headerName: 'volume', width: 150},
        {field: 'name', headerName: 'name', width: 150},
        {field: 'delivery_date', headerName: 'delivery_date', width: 500},
        {field: 'currency', headerName: 'currency', width: 150},
        {field: 'total', headerName: 'total', width: 150}
    ]

    return (
        <>
            <Header/>
            <div className="main">
                <Box sx={{height: '80vh', width: '100%'}}>
                    {isCancel && <PopupModal data={getNamesOfChosenItems()} docsId={getDocsIdToSend()} setCancel={setCancel} sendDocs={requestSendDocs}/>}
                         <DataGrid components={{Footer: Footer}} onSelectionModelChange={(a) => setChosenDocs(a)}
                                                            checkboxSelection columns={columns}
                                                            rows={rows}/>
                </Box>
            </div>
        </>
    );
};

export default Main;