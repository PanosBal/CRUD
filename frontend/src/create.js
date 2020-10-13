import React, { Component } from 'react';


class Create extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    event.preventDefault();
    var letters = /^[A-Za-z]+$/
    var dateRegex =  /^\d{4}-\d{2}-\d{2}$/;
    if (this.nameInput.value === "" || this.dobInput.value === ""){
      alert("Please complete the empty fields.");
    }else if(!this.nameInput.value.match(letters)){
      alert('Please input alphabet characters only at Name field.')
    }else if(!this.dobInput.value.match(dateRegex)){
      alert('Please input date as YYYY-MM-DD.')
    }else{
     this.props.Add(this.nameInput.value,this.dobInput.value);
    }
  }
  render(){
    return(
      <form onSubmit = {this.onSubmit}>
        <h3>Create Employee</h3>
        <input placeholder = "Name" ref={nameInput => this.nameInput = nameInput}/>
        <input placeholder = "Date of Birth" ref={dobInput => this.dobInput = dobInput}/>
        <button className= "btn btn-primary">Create</button>
      </form>
    )
  }
}

export default Create;