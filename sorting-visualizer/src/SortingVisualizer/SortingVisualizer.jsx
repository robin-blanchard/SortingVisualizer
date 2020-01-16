import React from 'react';
import Rectangle from './Rectangle.jsx'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import {get_animations_insertion_sort} from './InsertionSort.js'
import {get_animations_bubble_sort} from './BubbleSort.js'
import {quick_sort_hoare} from './QuickSortHoare.js'

import './SortingVisualizer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ARRAY_LENGTH=100;
const ARRAY_MIN=5;
const ARRAY_MAX=100;

const SORTING_SPEED=50;

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
        return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>Sorting Visualizer</Navbar.Brand>
            <Nav className="mx-auto">
                <Button className="mx-1" onClick={() => this.generate_new_array(ARRAY_LENGTH, ARRAY_MIN, ARRAY_MAX)}>Generate new array</Button>
                <Button className="mx-1" onClick={() => this.insertionSort()}>Insertion Sort</Button>
                <Button className="mx-1" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
                <Button className="mx-1" onClick={() => this.quickSort()}>Quick Sort (Hoare)</Button>
            </Nav>
            </Navbar>
            <div className="d-flex mx-auto" style={{ background: '#9e9e9e', width: '80vw', height: '80vh' }}>
                {this.state.array.map((number,idx) =>
                        (<Rectangle key={idx} color={this.state.color[idx]} height={Math.round(100*number/ARRAY_MAX)} 
                        width={Math.round(100/ARRAY_LENGTH)} value={ARRAY_LENGTH<=10 ? number : ""}></Rectangle>)
                )}
            </div>                

        </div>
            )
    }
    
    generate_new_array(len, min, max) {
        // var array = [65, 14, 96, 28, 7, 48, 64, 97, 89, 7];
        var array = [];
        for (var i = 0; i<len; i++){
            array.push(Math.round(ARRAY_MIN + (ARRAY_MAX-ARRAY_MIN)*Math.random()))
        }
        var color = array.map(number => 'turquoise')
        this.setState({array: array, color: color});
    }

    changeColor(idx_arr, color){
        var current_color = this.state.color.slice();
        idx_arr.forEach(function(idx, c=0){current_color[idx] = color[c++]});
        this.setState({color: current_color});
    }

    swapValues(i, j){
        var current_array = this.state.array.slice();
        var tmp = current_array[i];
        current_array[i] = current_array[j];
        current_array[j] = tmp;
        this.setState({array: current_array});
    }

    insertionSort(){
        var current_array = this.state.array.slice();
        var animations = get_animations_insertion_sort(current_array);
        for (var k = 0; k<animations.length; k++){
            var [i,j] = animations[k];
            setTimeout(
                function (i,j){
                    this.changeColor([i,j], ["red","red"]);
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
                    this.changeColor([i,j], ["turquoise","turquoise"]);
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
                    this.changeColor([i,j], toswap ? ["red","red"] : ["green","green"]);
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
                    this.changeColor([i,j], ["turquoise","turquoise"]);
                }.bind(this, i, j), (k+2/3)*SORTING_SPEED
            )
        }
    }

    quickSort(){
        var current_array = this.state.array.slice();
        var animations = [];
        [current_array, animations] = quick_sort_hoare(current_array, 0, current_array.length-1, animations);
        console.log(animations);
        var last_p, last_i, last_j = -1
        for (var k = 0; k<animations.length; k++){
            var [p,i,j,toswap] = animations[k];
            setTimeout(
                function(p, last_p){
                    if (p!=last_p){
                        this.changeColor([last_p, p], ["turquoise","orange"]);
                    }
                }.bind(this, p, last_p),
                k*SORTING_SPEED
            )
            setTimeout(
                function (last_i, last_j, i, j, last_p, p, toswap){
                    if (last_i==last_p && last_p==p){
                        this.changeColor([last_i, last_j], ["orange", "turquoise"]);
                    } else if (last_j==last_p && last_p==p){
                        this.changeColor([last_i, last_j], ["turquoise", "orange"]);
                    } else {
                        this.changeColor([last_i, last_j], ["turquoise", "turquoise"]);
                    }
                    this.changeColor([i,j], toswap ? ["red","red"] : ["green","green"]);
                }.bind(this, last_i, last_j, i, j, last_p, p, toswap),
                k*SORTING_SPEED
            )
            if (toswap){
                setTimeout(
                    function (i,j){
                        this.swapValues(i,j)
                    }.bind(this, i, j), (k+1/2)*SORTING_SPEED
                )
            }
            last_i=i;
            last_j=j;
            last_p=p;
        }
        setTimeout(
            function(){
                this.setState({color : current_array.map(number => 'turquoise')});
            }.bind(this),
            animations.length * SORTING_SPEED
        );
        
    }
}