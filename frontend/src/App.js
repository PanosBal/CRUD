import React, { Component } from 'react';
import axios from 'axios';
import Create from './create';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {employees: [], 
      isEdit: false, index:'',indexName:'',indexDob:'',indexEmployee:''
      };
  }
  
   shouldComponentUpdate() {
     return true;
  }

   getTable = async ()  => {
    await axios.get("http://localhost:5000/employees")
    .then(res => {
      console.log(res.data);
      var temp = res.data;      
      this.setState({ employees:temp });
      return(res.data)
    })
  }


  dobToNormal = (dob) => {
    var date = new Date(dob);
    
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dt = date.getDate();
    
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    date = year + '-' + month + '-' + dt;
    return date;
  }
//DELETE----------------------------------------------------------------------
  deleteAjax =  (id) =>{
    axios.get("http://localhost:5000/delete/" + id)
    .then(res => {
      console.log(res.data);
    })
  }

  delete = async (id) => {
    this.cancel(); 
    this.deleteAjax(id);
    await this.getTable();
  }

//CREATE----------------------------------------------------------------------
createAjax = async (info) =>{
 await axios.post("http://localhost:5000/create/",info)
  .then(res => {
    console.log(res.data);
  })
}

Add =  (xname,xdob) => {
  var temp = {name:xname,dob:xdob};
  this.createAjax(temp);
  this.getTable();
}

//Update----------------------------------------------------------------------


update = (employee) =>{
  this.setState({isEdit:true})
  this.setState({index:employee.id,indexName:employee.name,indexDob:employee.dob})
  this.setState({indexEmployee:employee})
  console.log(employee);
}

edit =  (xname,xdob) => {
  //console.log(xname,xdob)
  var temp = {name:xname,dob:xdob}
  this.updateAjax(temp);
    this.getTable();
  this.setState({isEdit:false})
}

updateAjax = async (updateInfo) =>{
   await axios.put("http://localhost:5000/update/" + this.state.index,updateInfo)
  .then(res => {
    console.log(res.data);
  })
}

onSubmit = (event) => {
  event.preventDefault();
  this.edit(this.nameInput.value,this.dobInput.value);
}

cancel = () => {
  this.setState({isEdit:false})
}

async componentDidMount(){
  await this.getTable() 
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
              <td>{this.dobToNormal(employee.dob)}</td>
              <td>
              <button  className="btn btn-success" onClick={() => this.update(employee)}>Update</button>
              </td>
              <td>
                <button  className="btn btn-danger" onClick={() => this.delete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        this.state.isEdit ?(
        <div>
          <form onSubmit = {this.onSubmit}>
          <h3>Update Employee</h3>
          <input placeholder = "Name" ref={nameInput => this.nameInput = nameInput} defaultValue ={this.state.indexName}/>
          <input placeholder = "Date of Birth" ref={dobInput => this.dobInput = dobInput} defaultValue ={this.dobToNormal(this.state.indexDob)}/>
          <button className="btn-info">Edit</button>
          <button  className="btn-warning" onClick={() => this.cancel()}>Cancel</button>
          </form>
          
        </div>
        ) : (
          <Create Add = {this.Add}/>
        )
      }
         
    </div> 
    
    );
  }
  
}


export default Employees;
