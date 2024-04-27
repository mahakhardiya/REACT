import { sum } from './helper';
import './App.css'
import Lottery from './Lottery'

function App() {
  
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App
