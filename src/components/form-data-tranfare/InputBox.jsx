import React from 'react';

const InputBox = ({ data, handleChange, handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Data</label>
                    <textarea type="text" className="form-control" rows="5" name="data" value={data} onChange={(e) => handleChange(e.target.value)} />
                </div>
                <button className="btn btn-primary btn-sm">Send</button>
            </form>
        </>
    );
}

export default InputBox;