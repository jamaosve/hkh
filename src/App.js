import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //tähän
state = {
  km: null,
  speed: null,
  age: null,
  dick: null,
  travelmethod: null,
  kullinluikaus: null
  }
// TODO: state, handler
// onChange
// hajoa koodiin
// ryyppää
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


  render() {
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
            <input type="number" name="km" min="0" defaultValue="2" />
            </label>
            </p>

            <p>
            <label>
            Matkustusnopeus (km/h):  
            <input type="number" name="speed" min="0" defaultValue="10"/>
            </label>
            </p>
          
            <p>
            <label>
            Ikä (vuosi):  
            <input type="number" name="age" min="18" max="99" defaultValue="25"/>
            </label>
            </p>
            
            <p>
            <label>
            Kullin pituus (cm):  
            <input type="number" name="dick" min="1" max="11" defaultValue="10"/>
            </label>
            </p>
          
            <p>
            Matkustusväline:        
            <select name="travelmethod" defaultValue="car">
            <option value="walk">Apostoli</option>
            <option value="car">Auto</option>
            <option value="bus">Bussi</option>
            <option value="train">Juna</option>
            <option value="plane">Lentskari</option>
            </select>
            </p>
          
            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
