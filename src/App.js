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

   const headers = {
     'Content-Type': 'application/json'
   }

   axios.post('https://script.google.com/macros/s/AKfycbxm83jpBa8QTfb0ZMwf9Ar_f6KBONdodoZuQ0g-fPfcSKarKhqjNRuHab41H-uC2L6y/exec', this.state, {
     headers: headers
   })
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
       <div className="message" id="message">
       </div>
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
