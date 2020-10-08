import React, { Component } from 'react';

class Create extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.Add(this.nameInput.value,this.dobInput.value);
  }
  render(){
    return(
      <form onSubmit = {this.onSubmit}>
        <h3>Create Employee</h3>
        <input placeholder = "Name" ref={nameInput => this.nameInput = nameInput}/>
        <input placeholder = "Date of Birth" ref={dobInput => this.dobInput = dobInput}/>
        <button>Create</button>
      </form>
    )
  }
}

export default Create;