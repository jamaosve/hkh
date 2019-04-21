import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {  
        km: null,
        speed: null,
        age: null,
        dick: null,
        travelmethod: null,
        kullinluikaus: null};
  
      this.handleKmChange = this.handleKmChange.bind(this);
      this.handleSpeedChange = this.handleSpeedChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleDickChange = this.handleDickChange.bind(this);
      this.handleTravelmethodChange = this.handleTravelmethodChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }
      
handleKmChange(event) {
  this.setState({km: event.target.value});
}
handleSpeedChange(event) {
  this.setState({speed: event.target.value});
}
handleAgeChange(event) {
  this.setState({age: event.target.value});
}
handleDickChange(event) {
  this.setState({dick: event.target.value});
}
handleTravelmethodChange(event) {
  this.setState({travelmethod: event.target.value});
}
calculateKullinluikaus() {
  if (this.state.dick > 11) {
    alert("VALEHTELIJA! Syötä rehelliset arvot!")
    return;
  }
  this.state.kullinluikaus = (this.state.km*100) * (this.state.speed/5) * ((this.state.age/25)/1.8);
switch (this.state.travelmethod) {
  case "walk":
  this.state.kullinluikaus = this.state.kullinluikaus*1
    break;
  case "car":
  this.state.kullinluikaus = this.state.kullinluikaus*2
    break;
  case "bus":
  this.state.kullinluikaus = this.state.kullinluikaus*3.8
    break;
  case "train":
  this.state.kullinluikaus = this.state.kullinluikaus*5
    break;
  case "plane":
  this.state.kullinluikaus = this.state.kullinluikaus*10
    break;
  default:
  this.state.kullinluikaus = this.state.kullinluikaus*1
    break;
}
if (this.state.kullinluikaus > 1000 ) {
  alert("Kullinluikauksen pituus on noin " + this.state.kullinluikaus/1000 + " kilometriä")
  return;
}
  alert("Kullinluikauksen pituus on noin " + this.state.kullinluikaus + " metriä")
}
handleSubmit(event){
  event.preventDefault();
  this.calculateKullinluikaus();
}



  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Kuinka pitkä on yksi kullinluikaus?    
          </p>
          <form>
            <p>
            <label>
             Kokonaismatka (km):  
            <input type="number" name="km" min="0" defaultValue="2" onChange={this.handleKmChange} />
            </label>
            </p>

            <p>
            <label>
            Matkustusnopeus (km/h):  
            <input type="number" name="speed" min="0" defaultValue="10" onChange={this.handleSpeedChange}/>
            </label>
            </p>
          
            <p>
            <label>
            Ikä (vuosi):  
            <input type="number" name="age" min="18" max="99" defaultValue="25" onChange={this.handleAgeChange}/>
            </label>
            </p>
            
            <p>
            <label>
            Kullin pituus (cm):  
            <input type="number" name="dick" min="1" max="11" defaultValue="10" onChange={this.handleDickChange}/>
            </label>
            </p>
          
            <p>
            Matkustusväline:        
            <select name="travelmethod" defaultValue="walk" onChange={this.handleTravelmethodChange}>
            <option value="walk">Apostoli</option>
            <option value="car">Auto</option>
            <option value="bus">Bussi</option>
            <option value="train">Juna</option>
            <option value="plane">Lentskari</option>
            </select>
            </p>
          
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
