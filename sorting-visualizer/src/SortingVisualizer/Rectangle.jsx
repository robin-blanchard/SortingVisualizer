import React from 'react';


export default class Rectangle extends React.Component{
    render() {
        var styleChild = {
            position : "absolute",
            backgroundColor : this.props.color,
            width : "100%",
            height : this.props.height.toString()+"%",
            top : (100-this.props.height).toString()+"%",
            };

        var styleParent = {
            position: "relative",
            width : this.props.width.toString()+"%",
            height : "100%",
            marginLeft: this.props.array_size<100 ? "1px" : "0px",
            marginRight: this.props.array_size<100 ? "1px" : "0px"
        };

        return (
            <div className="rectangle" style={styleParent}>
                <div style={styleChild}>
                    {this.props.value}
                </div>
            </div>
            
        )
    }
}