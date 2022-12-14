import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../store";

import './QuantityTotal.scss'

const QuantityTotal = () => {

    const documents = useAppSelector(state => state.main.documents)
    const chosenDocuments = useAppSelector(state => state.main.chosenDocuments)
    const [quantity, setQuanity] = useState(0)

    useEffect(() => {
        let temp = chosenDocuments.map(id => {
            return documents.map(item => {
                if (item.id === id) {
                    return item.qty
                }
            })
        }).flat().filter(item => item !== undefined)
        let qty = temp.reduce((sum: any, el: any) => {
            return sum + el
        }, 0)
        setQuanity(qty)
    }, [chosenDocuments])

    return (
        <div className='quantity'>
            Quantity: {quantity && quantity}
        </div>
    );
};

export default QuantityTotal;
