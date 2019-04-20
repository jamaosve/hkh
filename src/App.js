import React, { Component } from 'react';
import logo from './200.gif';
import './App.css';

class App extends Component {
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
           Kokonaismatka kilometreinä:  
          <input type="text" name="km" />
          </label>
          </p>
          <p>
          <label>
           Matkustusnopeus:  
          <input type="text" name="speed" />
          </label>
          </p>
          <p>
          <label>
           Ikä:  
          <input type="text" name="age" />
          </label>
          </p>
          <p>
          <label>
           Kullin pituus:  
          <input type="text" name="dick" />
          </label>
          </p>
          <p>
          Matkustusväline:        
          <select>
            <option value="walk">Apostoli</option>
            <option value="car">Auto</option>
            <option selected value="bus">Bussi</option>
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
