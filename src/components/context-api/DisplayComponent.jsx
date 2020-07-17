import React from 'react';
import { useContext } from 'react';
import { dataContext } from './HomeContextUseReducer';

const DisplayComponent = () => {
    const { state } = useContext(dataContext);
    const { email, password, isSubscribe } = state.formData;

    return (
        <>
            <div className="jumbotron my-3">
                <ul>
                    <li>Email : {email}</li>
                    <li>Password : {password}</li>
                    <li>IsSubscribe : {isSubscribe ? 'true' : 'false'} </li>

                </ul>
            </div>
        </>
    );
}

export default DisplayComponent;