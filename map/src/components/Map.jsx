import React, { Component } from 'react';
import { ReactComponent as CongressionalMap } from '../resources/test.svg';

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <CongressionalMap />
            </div>
        )
    }
}

export default Map