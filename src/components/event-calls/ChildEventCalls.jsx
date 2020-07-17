import React, { Component, Fragment } from 'react';

class ChildEventCalls extends Component {
    state = {
        lastName: 'kumar'
    }

    render() {
        return (
            <Fragment>
                <button onClick={() => this.props.getlastNameToParent(this.state.lastName)}>send lastName</button>
            </Fragment>
        );
    }
}

export default ChildEventCalls;