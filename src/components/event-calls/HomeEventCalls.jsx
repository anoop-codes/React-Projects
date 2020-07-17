import React, { Component } from 'react';
import ChildEventCalls from './ChildEventCalls';
import ChildTwoEventCalls from './ChildTwoEventCalls';

class HomeEventCalls extends Component {
    state = {
        name: ''
    }

    HandleChangeName = (e) => {
        // e.persist()
        this.setState({
            name: e
        })
    }

    getlastNameToParent = (lastName) => {
        console.log(lastName)
    }
    render() {
        return (
            <>
                <div>
                    Name:{this.state.name}

                </div>
                <button className="btn-sm" onClick={() => this.HandleChangeName('Anoop')}>change name</button>
                <br>
                </br>
                <br />
                <ChildEventCalls getlastNameToParent={this.getlastNameToParent} />
                <br>
                </br>
                <br />
                <ChildTwoEventCalls />
            </>
        );
    }
}

export default HomeEventCalls;