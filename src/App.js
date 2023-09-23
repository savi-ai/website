import React, { Component } from 'react';
import axios from 'axios';
import logo from './stars.gif';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

 handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/f0effe0c-d6d9-4704-861d-a98c5220e8df', this.state)
    .then(response => {
      console.log(response);
    })
  }

  render() {
    const { email } = this.state;   
     return (
       <div className="App" style={{backgroundImage: logo}}>
         <header className="App-header">
           <h1> The intelligence that helps your business is on its way!!</h1>
           
           <form id="contact-form" onSubmit={this.handleSubmit}>
             <div className="form-group">
               <label className="input">Keep Me Posted  </label>
               <input type="email" className="form-control" name="email"  value={email} aria-describedby="emailHelp" onChange={this.changeHandler}/>
               <button type="submit" className="btn btn-primary">Submit</button>
             </div>  
           </form>
         </header>
       </div>
     );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
  handleSubmit(event) {
  }
 
}

export default App;
