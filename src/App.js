import React, { useState } from "react";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
    // to check whose turn it is 0 or X
    const [isCross, setIsCross] = useState(false);

    /* state to declare the winner */
    const [winMessage, setWinMessage] = useState("");

    const card = document.querySelectorAll(".card");
    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty", 0, 9);

        card.forEach( el=>{
            el.style.backgroundColor = "#fff"
        })

    };
    const changeColor = (x, y, z) => {
        card[x].style.backgroundColor = "#28a745";
        card[y].style.backgroundColor = "#28a745";
        card[z].style.backgroundColor = "#28a745";
        console.log("Added success");
    };

    const checkIsWinner = () => {
        //
        if (
            itemArray[0] === itemArray[1] &&
            itemArray[1] === itemArray[2] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} wins`);
            changeColor(0, 1, 2);


        } else if (
            itemArray[3] === itemArray[4] &&
            itemArray[4] === itemArray[5] &&
            itemArray[3] !== "empty"
        ) {
            setWinMessage(`${itemArray[3]} wins`);
            changeColor(3, 4, 5);

        } else if (
            itemArray[6] === itemArray[7] &&
            itemArray[7] === itemArray[8] &&
            itemArray[6] !== "empty"
        ) {
            setWinMessage(`${itemArray[6]} wins`);
            changeColor(6, 7, 8);

        } else if (
            itemArray[0] === itemArray[3] &&
            itemArray[3] === itemArray[6] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} wins`);
            changeColor(0, 3, 6);

        } else if (
            itemArray[1] === itemArray[4] &&
            itemArray[4] === itemArray[7] &&
            itemArray[1] !== "empty"
        ) {
            setWinMessage(`${itemArray[1]} wins`);
            changeColor(1, 4, 7);

        } else if (
            itemArray[2] === itemArray[5] &&
            itemArray[5] === itemArray[8] &&
            itemArray[2] !== "empty"
        ) {
            setWinMessage(`${itemArray[2]} wins`);
            changeColor(2,5,8);
        } else if (
            itemArray[0] === itemArray[4] &&
            itemArray[4] === itemArray[8] &&
            itemArray[0] !== "empty"
        ) {
            setWinMessage(`${itemArray[0]} wins`);
            changeColor(0,4,8);
        } else if (
            itemArray[2] === itemArray[4] &&
            itemArray[4] === itemArray[6] &&
            itemArray[2] !== "empty"
        ) {
            setWinMessage(`${itemArray[2]} wins`);
            changeColor(2,4,6);
        }

    };

    const changeItem = (itemNumber) => {
        if (winMessage) {
            return toast(winMessage, { type: "success" });
        }
        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        } else {
            return toast("Already Filled", { type: "error" });
        }

        checkIsWinner();
    };

    return (
        <Container className="p-5">
            <ToastContainer position="bottom-center" />
            <Row>
                <Col md={6} className="offset-md-3">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>
                                Reload the game
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCross ? "Cross" : "Circle"} turns
                        </h1>
                    )}
                    <div className="grid">
                        {itemArray.map((item, index) => (
                            <Card onClick={() => changeItem(index)}>
                                <CardBody className="box">
                                    <Icon name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
