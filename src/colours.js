import React, { Component } from 'react'

class Colour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "black",
            message: ""
        }
    }

    red = () => {
        this.setState({color:"red"});
        this.setState({message: "It's Charmander"})
    }

    blue = () => {
        this.setState({color:"blue"});
        this.setState({message:"It's Squirtle"})
    }

    green = () => {
        this.setState({color:"green"});
        this.setState({message:"It's Bulbasaur"})
    } 

    render() {
        return (
        <div style={{color:this.state.color}}>
            <h1>Who's that Pokemon?</h1>
            <button onClick={this.green}>green</button>
            <button onClick={this.red}>red</button>
            <button onClick={this.blue}>blue</button>
            <h2>
                <div>{this.state.message}</div>
            </h2>
        </div>
        )
    }
}

export default Colour