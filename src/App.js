import React, {useState, useEffect} from "react";

import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"
import Wrapper from './components/Wrapper/Wrapper';
import Modal from "./components/Modal/Modal"

import './App.css';

function App() {
  let search = "java";
  const [data, setData] = useState([])
  useEffect(() => {
  fetch( `https://www.googleapis.com/books/v1/volumes?q=${search}&orderBy=newest`)
        .then(res => res.json())
        .then(data => setData(data))
  }, [])
 
  return (
    <div className="container-fluid">
      <Nav />
      <Main  data={data}/>
      <Wrapper data={data}/>
      <Modal/>
    </div>
  );
}

export default App;
