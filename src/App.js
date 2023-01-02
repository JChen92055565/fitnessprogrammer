import './App.css';
import Spreadsheet from "react-spreadsheet";
import Sheet from './Sheet'

function App() {
  return (
    <div className="App">
      <div className = "Monday">
      <h4>Monday</h4>
      <Sheet/>
      </div>

      <div className = "Tuesday">
      <h4>Tuesday</h4>
      <Sheet/>
      </div>

      <div className = "Wednesday">
      <h4>Wednesday</h4>
      <Sheet/>
      </div>

      <div className = "Thursday">
      <h4>Thursday</h4>
      <Sheet/>
      </div>

      <div className = "Friday">
      <h4>Friday</h4>
      <Sheet/>
      </div>

      <div className = "Saturday">
      <h4>Saturday</h4>
      <Sheet/>
      </div>

      <div className = "Sunday">
      <h4>Sunday</h4>
      <Sheet/>
      </div>
      
    </div>
  );
}

export default App;
