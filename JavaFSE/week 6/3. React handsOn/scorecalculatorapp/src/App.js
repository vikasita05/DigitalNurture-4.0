import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore Name={"Vikasita"}
      School={"Sri Krishna"}
      total={580}
      goal={3}/>
    </div>
  );
}

export default App;
