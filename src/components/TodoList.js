import React, { Component } from "react";
import Items from "./Items";
import Counter from "./Counter";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newItem: " ",
      items: []
    };
  }

  componentDidMount() {
      //check if localstorage exist
    const items = JSON.parse(localStorage.getItem("todo-app"));
    if (items) this.setState({ items });
  }

  componentDidUpdate() {
    const items = this.state.items;
    localStorage.setItem("todo-app", JSON.stringify(items))
  }

  handleChange = event => {
    //save to the state -> newItem
    this.setState({ newItem: event.target.value });
  };

  handleStatus = (id) => {
      const items = this.state.items.map(
          item => {
              if(item.id === id){
                  item.status = !item.status
                  return item
              }else return item
          }
      )
      this.setState({items})
  }

  handleDelete = (id) =>{
    const items = this.state.items.filter(
       item => item.id !== id 
    )
    this.setState({items})
  }

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: Date.now(), //timpstamp
      text: this.state.newItem.trim(),
      status: false
    };
    if (newItem.text !== "") {
      this.setState(prevState => ({
        items: [...prevState.items, newItem], //prevState.items.concat(newItem),
        newItem: ""
      }));
    }
  };

  //new method for the submit button of the form
  //when it happen you save newitem from state to items array

  render() {
    return (
      <div>
        <Items 
        onStatus={this.handleStatus} 
        onDelete = {this.handleDelete}
        items={this.state.items} 
        />
        <Counter items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control mb-4"
            placeholder="Add a new task"
            onChange={this.handleChange}
            type="text"
            id="todo-item"
            value={this.state.newItem}
          ></input>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}
