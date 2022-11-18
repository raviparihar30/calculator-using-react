import React, { useState } from "react";
import { Button, Form,Input, Label } from "reactstrap";

const FormComponent = ({todo,setTodo,search, setSearch}) => {

    const [title,setTitle]=useState('');
    const handleSubmit = () => {
        setTodo([...todo,{title:title,type:'todo',checked:false}]);
        setTitle('');
       
      }
  return (
    <>
    

    <Form className="d-flex align-items-end justify-content-between w-100 py-4">
    <Input type="text" name="search" className="w-25 me-3" id="title" value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="Search Here" />
      <div className="d-flex">
      <Input type="text" name="title" className="w-75 me-3" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder="Enter Title" />

      <Button onClick={handleSubmit}>Add</Button>
      </div>
    </Form>
    
    
    </>
  );
};

export default FormComponent;
