import React from 'react';
import Rectangle from './Rectangle.jsx'
import Button from 'react-bootstrap/Button';

import './SortingVisualizer.css'



const ARRAY_LENGTH=10
const ARRAY_MIN=5
const ARRAY_MAX=100

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array : []
        }
      }
    
    componentDidMount() {
        this.generate_new_array(ARRAY_LENGTH, ARRAY_MIN, ARRAY_MAX);
    }

    render(){
        return (<div>
                <div className="arrayContainer" style={{ background: '#9e9e9e', width: '80vw', height: '80vh' }}>
                    {this.state.array.map((number,idx) =>
                            (<Rectangle key={idx} color={'turquoise'} height={Math.round(100*number/ARRAY_MAX)} 
                            width={Math.round(100/ARRAY_LENGTH)} value={ARRAY_LENGTH<=10 ? number : ""}></Rectangle>)
                    )}
                </div>
                <Button onClick={() => this.generate_new_array(ARRAY_LENGTH, ARRAY_MIN, ARRAY_MAX)}>Generate new array</Button>
                </div>
            )
    }
    
    generate_new_array(len, min, max) {
        var array = []
        for (var i = 0; i<len; i++){
            array.push(Math.round(ARRAY_MIN + (ARRAY_MAX-ARRAY_MIN)*Math.random()))
        }
        this.setState({array: array});
    }
}