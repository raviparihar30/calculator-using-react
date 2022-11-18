import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Input,
} from "reactstrap";
import classnames from "classnames";
import { useState } from "react";

const TabComponent = ({ todo, setTodo,search }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleSubmit = () => {
    console.log("before",todo)
    let temp = [...todo];
    !!temp.length &&
      temp
        .map((d, i) => {
            if(d.checked==true)
            {
                temp[i].type = "completed";
                temp[i].checked = false;
            }
          
        });
        setTodo(temp);
        console.log("after",todo)
    // setTodo(temp);
  };
 

  return (
    <div>
      {!!todo.length && todo.some((el) => el.checked === true) && (
        <Button onClick={handleSubmit} className="my-3">
          Complete All
        </Button>
      )}

      <Nav tabs>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            className={classnames({ active: activeTab === 1 })}
            onClick={() => {
              setActiveTab(1);
            }}
          >
            Todo
          </NavLink>
        </NavItem>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            className={classnames({ active: activeTab === 2 })}
            onClick={() => {
              setActiveTab(2);
            }}
          >
            Completed
          </NavLink>
        </NavItem>
        <NavItem style={{ cursor: "pointer" }}>
          <NavLink
            className={classnames({ active: activeTab === 3 })}
            onClick={() => {
              setActiveTab(3);
            }}
          >
            All
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          {!!todo.length &&
            todo.map((d, i) => {
                if(d.type==="todo" && d.title.includes(search))
                {
                    return (
                        <Row key={i}>
                          <Col sm="12">
                            <div className="d-flex w-25 align-items-center p-2">
                              <Input
                                id="checkbox2"
                                onChange={(e) => {
                                  let temp = [...todo];
                                  temp[i].checked = e.target.checked;
                                  setTodo(temp);
                                }}
                                type="checkbox"
                                className="me-2"
                              />
                              <div className="me-3">
                                {i + 1}. {d.title}
                              </div>
                              <Button
                                onClick={() => {
                                  let temp = [...todo];
                                  temp[i].type = "completed";
                                  temp[i].checked=false
                                  setTodo(temp);
                                  
                                }}
                              >
                                Completed
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      );
                }
               
              })}
        </TabPane>
        <TabPane tabId={2}>
          {!!todo.length &&
            todo
              .filter((f) => f.type === "completed")
              .map((d, i) => {
                if(d.title.includes(search)){
                  return (
                    <Row key={i}>
                      <Col sm="12">
                        <div className="d-flex w-25 align-items-center p-2">
                          <div className="me-3">
                            {i + 1}. {d.title}
                          </div>
                          {/* <Button>Completed</Button> */}
                        </div>
                      </Col>
                    </Row>
                  );
                }
            
              })}
        </TabPane>
        <TabPane tabId={3}>
          {!!todo.length &&
            todo.map((d, i) => {
              if(d.title.includes(search)){
                return (
                  <Row key={i}>
                    <Col sm="12">
                      <div className="d-flex w-25 align-items-center p-2">
                        <div className="me-3">
                          {i + 1}. {d.title}
                        </div>
                        {/* <Button>Completed</Button> */}
                      </div>
                    </Col>
                  </Row>
                );
              }
            })}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabComponent;
