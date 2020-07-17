import React, { Fragment, useState } from 'react';
import InputBox from './InputBox';
import DisplayFromData from './DisplayFormData';
import { useEffect } from 'react';

const HomeFromDataTranfare = () => {

    const [data, setData] = useState('');
    const [displayData, setDisplayData] = useState('');
    const [bgColor, setBgColor] = useState('');

    const handleDataChange = value => {
        setData(value)
    }

    const handleDataSubmit = (e) => {
        e.preventDefault();
        setDisplayData(data);
        setData('');
        setBgColor('')
    }

    useEffect(() => {
        displayData && setTimeout(() => {
            setBgColor('green')
        }, 5000)
        return () => {
            ///..unmounting
        }
    }, [displayData])

    return (
        <Fragment>
            <InputBox data={data} handleChange={handleDataChange} handleSubmit={handleDataSubmit} />
            <DisplayFromData displayData={displayData} bgColor={bgColor} />
        </Fragment>
    );
}

export default HomeFromDataTranfare;