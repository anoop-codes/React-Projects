import React, { useReducer } from 'react';
import FormComponent from './Form';
import DisplayComponent from './DisplayComponent';

export const dataContext = React.createContext();

const initalState = {
    formData: {
        email: '',
        password: '',
        isSubscribe: false
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case "FORMUPDATE":
            return {
                ...state,
                formData: action.payload
            }

        default:
            return state;
    }
}

const HomeContextUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initalState);

    return (
        <div>
            <dataContext.Provider value={{ state, dispatch }}>
                <FormComponent />
                <DisplayComponent />
            </dataContext.Provider>
        </div>
    );
}

export default HomeContextUseReducer;