import logo from './stars.gif';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: logo}}>
      <header className="App-header">
        <h1> The intelligence that helps your business is on its way!!</h1>
      
        <form id="contact-form">
          <div className="form-group">
            <label class="input">Keep Me Posted  </label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>  
        </form>
      </header>
    </div>
 
  );
}

export default App;
