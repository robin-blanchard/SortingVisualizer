import React from 'react';
import Rectangle from './Rectangle.jsx'
import Button from 'react-bootstrap/Button';

import {get_animations_insertion_sort} from './InsertionSort.js'
import {get_animations_bubble_sort} from './BubbleSort.js'
import './SortingVisualizer.css'

const ARRAY_LENGTH=10;
const ARRAY_MIN=5;
const ARRAY_MAX=100;

const SORTING_SPEED=500;

export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array : [],
            color : []
        }
      }
    
    componentDidMount() {
        this.generate_new_array(ARRAY_LENGTH, ARRAY_MIN, ARRAY_MAX);
    }

    render(){
        return (<div>
                <div className="arrayContainer" style={{ background: '#9e9e9e', width: '80vw', height: '80vh' }}>
                    {this.state.array.map((number,idx) =>
                            (<Rectangle key={idx} color={this.state.color[idx]} height={Math.round(100*number/ARRAY_MAX)} 
                            width={Math.round(100/ARRAY_LENGTH)} value={ARRAY_LENGTH<=10 ? number : ""}></Rectangle>)
                    )}
                </div>
                <Button onClick={() => this.generate_new_array(ARRAY_LENGTH, ARRAY_MIN, ARRAY_MAX)}>Generate new array</Button>
                <Button onClick={() => this.insertionSort()}>Insertion Sort</Button>
                <Button onClick={() => this.bubbleSort()}>Bubble Sort</Button>

                </div>
            )
    }
    
    generate_new_array(len, min, max) {
        var array = []
        for (var i = 0; i<len; i++){
            array.push(Math.round(ARRAY_MIN + (ARRAY_MAX-ARRAY_MIN)*Math.random()))
        }
        var color = array.map(number => 'turquoise')
        this.setState({array: array, color: color});
    }

    insertionSort(){
        var current_array = this.state.array.slice();
        var animations = get_animations_insertion_sort(current_array);
        for (var k = 0; k<animations.length; k++){
            var [i,j] = animations[k];
            setTimeout(
                function (i,j){
                    this.changeColor([i,j], "red");
                }.bind(this, i, j),
                k*SORTING_SPEED
            )
            setTimeout(
                function (i,j){
                    this.swapValues(i,j)
                }.bind(this, i, j), (k+1/3)*SORTING_SPEED
            )
            setTimeout(
                function (i,j){
                    this.changeColor([i,j], "turquoise");
                }.bind(this, i, j), (k+2/3)*SORTING_SPEED
            )
        }
    }

    bubbleSort(){
        var current_array = this.state.array.slice();
        var animations = get_animations_bubble_sort(current_array);
        for (var k = 0; k<animations.length; k++){
            var [i,j,toswap] = animations[k];
            setTimeout(
                function (i,j,toswap){
                    this.changeColor([i,j], toswap ? "red" : "green");
                }.bind(this, i, j, toswap),
                k*SORTING_SPEED
            )
            if (toswap){
                setTimeout(
                    function (i,j){
                        this.swapValues(i,j)
                    }.bind(this, i, j), (k+1/3)*SORTING_SPEED
                )
            }
            setTimeout(
                function (i,j){
                    this.changeColor([i,j], "turquoise");
                }.bind(this, i, j), (k+2/3)*SORTING_SPEED
            )
        }
    }

    changeColor(idx_arr, color){
        var current_color = this.state.color.slice();
        idx_arr.forEach(function(idx){current_color[idx] = color});
        this.setState({color: current_color});
    }

    swapValues(i, j){
        var current_array = this.state.array.slice();
        var tmp = current_array[i];
        current_array[i] = current_array[j];
        current_array[j] = tmp;
        this.setState({array: current_array});
    }
}