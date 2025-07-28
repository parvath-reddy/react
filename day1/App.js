import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar props={{ logotext: "codewithankoor" }} />
      <div className="value">{value}</div>
      <button onClick={() => { setValue(value + 1) }}>click me </button>
      <Footer />
    </div>
  );
}

export default App;