import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const itemArray = new Array().fill("empty");

const App = () => {

  const [isCross, setIsCross] = useState('false')

  /* state to declare the winner */
  const [winMessage, setWinMessage] = useState('');

  const reloadGame=()=>{
    //
  }

  const checkIsWinner = () =>{
    //
  }

  const changeItem = itemNumber =>{
    //
  }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Icon />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
