import { useState } from "react";
import "./App.css";

function App() {
  const [conta, setConta] = useState(10);

  function somar() {
    setConta(conta + 1);
  }

  return (
    <div className="container-teste">
      {`oi! esse aqui é o número: ${conta}`}
      <button onClick={somar}>Somar o contador</button>
    </div>
  );
}

export default App;
