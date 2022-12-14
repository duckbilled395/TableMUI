import React, {useEffect, useState} from 'react';

import {useAppSelector} from "../../store";

import './VolumeTotal.scss'

const VolumeTotal = () => {

    const documents = useAppSelector(state => state.main.documents)
    const chosenDocuments = useAppSelector(state => state.main.chosenDocuments)
    const [volume, setVolume] = useState(0)

    useEffect(() => {
        let temp = chosenDocuments.map(id => {
            return documents.map(item => {
                if (item.id === id) {
                    return item.volume
                }
            })
        }).flat().filter(item => item !== undefined)
        let volume = temp.reduce((sum: any, el: any) => {
            return sum + el
        }, 0)
        setVolume(volume)
    }, [chosenDocuments])

    return (
        <div className='volume'>
            Volume: {volume && volume}
        </div>
    );
};

export default VolumeTotal;