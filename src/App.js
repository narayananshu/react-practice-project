// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
   
<Navbar title="Tutorials" aboutText="About Us"/>
<div className="container mb-3">
<Textform heading="Enter the heading"/>
</div>

  </>
);
}

export default App;
