import { Container } from "@mui/system";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import swal from "sweetalert";

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
      let ans = eval(input);
      setInput(ans);
    } catch (err) {
      swal("error", "Wrong Expression, try again", "error");
      setInput("0");
    }
  };
  console.log(input);

  return (
    <div
      className="flex alignItems-center"
      style={{ border: 1, width: "300px", margin: "auto" }}
    >
      <div className="text-center">
        <h1>
          Calculator
        </h1>
      </div>
      <Row>
        <Col className="fw-bold bg-secondary text-white border border-dark  p-4 text-end">
          {input}
        </Col>
      </Row>
      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center cursor-pointer"
          onClick={(e) => {
            setInput("0");
          }}
        >
          AC
        </Col>

        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("+");
          }}
        >
          +
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("%");
          }}
        >
          %
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("/");
          }}
        >
          /
        </Col>
      </Row>

      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("7");
          }}
        >
          7
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("8");
          }}
        >
          8
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("9");
          }}
        >
          9{" "}
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("*");
          }}
        >
          X
        </Col>
      </Row>
      <Row>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("4");
          }}
        >
          4
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("5");
          }}
        >
          5
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("6");
          }}
        >
          6
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("-");
          }}
        >
          -
        </Col>
      </Row>
      <Row>
        <Col
          xs="6"
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick("0");
          }}
        >
          0
        </Col>
        <Col
          className="fw-bold bg-light border border-dark  p-4 text-center"
          onClick={(e) => {
            handleclick(".");
          }}
        >
          .
        </Col>
        <Col
          className="fw-bold bg-warning text-white border border-dark  p-4 text-center"
          onClick={(e) => {
            calculateAns();
          }}
        >
          =
        </Col>
      </Row>
    </div>
  );
};
export default Calculator;
