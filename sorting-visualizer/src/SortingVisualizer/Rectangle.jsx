import React from 'react';


export default class Rectangle extends React.Component{
    render() {
        var style = {backgroundColor : this.props.color,
            width : this.props.width.toString()+"%",
            height : this.props.height.toString()+"%"}

        return (
            <div className="rectangle" style={style}>
                {this.props.value}
            </div>
        )
    }
}