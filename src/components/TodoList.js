import React, { Component } from 'react'
import Items from './Items'

export default class TodoList extends Component {
    constructor(){
        super()
        this.state={
            newItem:" ",
            items:[ ]
        }
    }

    handleChange = event => {
         //save to the state -> newItem
        this.setState({newItem:event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const newItem = this.state.newItem.trim()
        if(newItem !== "" ){
        this.setState(prevState =>({
            items: prevState.items.concat(newItem),
            newItem:""
        }))
    }}

    //new method for the submit button of the form
    //when it happen you save newitem from state to items array

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <p>A list of things</p>
                <Items items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleChange} 
                    type="text" 
                    id="todo-item" 
                    value={this.state.newItem}>
                    </input>
                    <button className= 'btn btn-primary'>Add</button>
                </form>
            </div>
        )
    }
}
