import { Typography } from "@mui/material";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import swal from "sweetalert";

import styles from "./calculator.module.css";

const Calculator = (props) => {
  const [input, setInput] = useState("0");
  const handleclick = (str) => {
    if (input === "0") {
      setInput(str);
    } else {
      setInput(input + str);
    }
  };

  const calculateAns = () => {
    try {
      const ans = eval(input);
      setInput(ans);
    } catch (err) {
      swal("error", "Wrong Expression, try again", "error");
      setInput("0");
    }
  };

  return (
    <div
      className={`flex alignItems-center ${styles.main}`}
      // style={{ border: 1, width: "300px", margin: "auto" }}
    >
      <div className="text-center">
        <Typography variant="h2"> Calculator</Typography>
      </div>
      <Row>
        <Col className="fw-bold bg-secondary text-white border border-dark  p-4 text-end">
          {input}
        </Col>
      </Row>
      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center cursor-pointer"
          onClick={() => setInput("0")}
        >
          AC
        </Col>

        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("+")}
        >
          +
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("%")}
        >
          %
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={() => handleclick("/")}
        >
          /
        </Col>
      </Row>

      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("7")}
        >
          7
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("8")}
        >
          8
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("9")}
        >
          9
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={() => handleclick("*")}
        >
          X
        </Col>
      </Row>
      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("4")}
        >
          4
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("5")}
        >
          5
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("6")}
        >
          6
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={() => handleclick("-")}
        >
          -
        </Col>
      </Row>
      <Row>
        <Col
          xs="6"
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick("0")}
        >
          0
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={() => handleclick(".")}
        >
          .
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={calculateAns}
        >
          =
        </Col>
      </Row>
    </div>
  );
};
export default Calculator;
