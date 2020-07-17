import React from 'react';
import { useContext } from 'react';
import { dataContext } from './HomeContextUseReducer';
import { useState } from 'react';
import InputBox from './InputBox';

const FormComponent = () => {

    const { state: contextData, dispatch } = useContext(dataContext);
    const [state, setState] = useState(contextData.formData);

    const { email, isSubscribe, password } = state;


    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: "FORMUPDATE", payload: state });
        // setState(intialFormData)
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputBox
                labelName="email"
                //type="email"
                handleChange={handleChange}
                name="email"
                value={email}
            />

            <InputBox
                labelName="password"
                type="password"
                handleChange={handleChange}
                name="password"
                value={password}
            />

            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input"
                    id="subscribe"
                    checked={isSubscribe}
                    onChange={(e) => setState({ ...state, isSubscribe: !isSubscribe })}
                    name="isSubscribe"
                />
                <label className="form-check-label" htmlFor="subscribe">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default FormComponent;