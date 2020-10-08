import React, { Component } from 'react';
import axios from 'axios';
import Create from './create';

class Employees extends Component {
  constructor() {
    super();
    this.state = {employees: []
      };
  }

   getTable =  () => {
    axios.get("http://localhost:5000/employees")
    .then(res => {
      var employees = res.data;
      //var x = JSON.parse(JSON.stringify(employees))
      //console.log(x)
      this.setState({ employees });
    })
  }
  

//DELETE----------------------------------------------------------------------
  deleteAjax = (id) =>{
    axios.get("http://localhost:5000/delete/" + id)
    .then(res => {
      console.log(res.data);
    })
  }

  delete = (id) => { 
    this.deleteAjax(id)
      this.getTable();
  }

//CREATE----------------------------------------------------------------------
createAjax = (info) =>{
  axios.post("http://localhost:5000/create/",info)
  .then(res => {
    //console.log(res);
    console.log(res.data);
  })
}

Add = (xname,xdob) => {
  var temp = {name:xname,dob:xdob};
  this.createAjax(temp);
  this.getTable();
}

//Update----------------------------------------------------------------------






async componentDidMount(){
  await  this.getTable() 
}
  
  render() {
    
    return (
      <div className = "container">
        <table id="dtMaterialDesignExample" className="table" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date Of Birth</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.dob}</td>
              <td>
              <button  className="btn btn-success" onClick={() => this.Update(employee.id)}>Update</button>
              </td>
              <td>
                <button  className="btn btn-danger" onClick={() => this.delete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Create Add = {this.Add}/>   
    </div> 
    
    );
  }
}


export default Employees;
