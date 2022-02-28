import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"
import Wrapper from './components/Wrapper/Wrapper';
import Modal from "./components/Modal/Modal"
import './App.css';

function App() {
  return (
    
    <div className="container-fluid">
      <Nav/>
      <Main/>
      <Wrapper/>
      <Modal/>
    </div>
  );
}

export default App;
