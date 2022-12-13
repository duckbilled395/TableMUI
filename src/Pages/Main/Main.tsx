import React, {useEffect, useState} from 'react';

import './Main.scss'
import Header from "../../shared/components/Layout/Header/Header";
import Footer from "../../shared/components/Layout/Footer/Footer";
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {useActions, useAppSelector} from "../../shared/store";


const Main: React.FC = () => {

    const {setDocs1} = useActions()
    const documents = useAppSelector(state => state.main.documents)
    const [rows, setRows] = useState([])
    
    useEffect(() => {
        setDocs1({
            id: '1',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName1',
            delivery_date: '2015-03-26',
            currency: 'currency'
        })
        setDocs1({
            id: '2',
            status: 'active',
            sum: 100,
            qty: 5,
            volume: 20,
            name: 'itemName2',
            delivery_date: '2015-03-26',
            currency: 'currency'
        })
    }, [rows])


    // const data = [{
    //     id: '2',
    //     status: 'active',
    //     sum: 100,
    //     qty: 5,
    //     volume: 20,
    //     name: 'itemName2',
    //     delivery_date: new Date('2015-03-26'),
    //     currency: 'currency'
    // }]
    // documents.map(el => {
    //     el.delivery_date = new Date(el.delivery_date)
    //     Object.defineProperty(el, 'total', {
    //         enumerable: false,
    //         configurable: false,
    //         writable: false,
    //         value: el.sum + el.qty
    //     })
    //     // @ts-ignore
    //     rows.push(el)
    // })
    // const rows = [{
    //     id: '1',
    //     status: 'active',
    //     sum: 100,
    //     qty: 5,
    //     volume: 20,
    //     name: 'itemName1',
    //     delivery_date: new Date('2015-03-28'),
    //     currency: 'currency',
    // }]
    const columns = [
        {field: 'status', headerName: 'status', width: 150},
        {field: 'sum', headerName: 'sum', width: 150},
        {field: 'qty', headerName: 'qty', width: 150},
        {field: 'volume', headerName: 'volume', width: 150},
        {field: 'name', headerName: 'name', width: 150},
        {field: 'delivery_date', headerName: 'delivery_date', width: 250},
        {field: 'currency', headerName: 'currency', width: 150},
        {field: 'total', headerName: 'total', width: 150}

    ]
    // const testRows = (documents.map(el => {
    //     rows.push(el)
    // }))

    // setDocs1({
    //     id: '1',
    //     status: 'active',
    //     sum: 100,
    //     qty: 5,
    //     volume: 20,
    //     name: 'itemName1',
    //     delivery_date: '2015-03-28',
    //     currency: 'currency',
    // })

    return (

        <>
            <Header/>
            <div className="main">
                <Box sx={{height: '80vh', width: '100%'}}>
                    <DataGrid onSelectionModelChange={(a) => console.log(a)} checkboxSelection columns={columns}
                              rows={documents.sort((a, b) => +b.delivery_date - +a.delivery_date)}/>
                </Box>
            </div>
            <Footer/>
        </>
    );
};

export default Main;