import React/*, { useState }*/ from 'react';

//import Header from './Header';
//import Logon from './pages/Logon';

import Routes from './routes';

import './global.css';

// function App() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }

//   return (
//     <div>
//       <Header>Contador: {counter}</Header>
//       <button onClick={increment}>Incrementar</button>
//     </div>
//   );
// }

function App() {
  return (
    <Routes />
  );
}

export default App;
