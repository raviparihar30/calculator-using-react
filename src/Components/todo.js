import React, { useState } from 'react';


import FormComponent from './formComponent';
import TabComponent from './tabComponent';


const Todo=(props)=>{
    const [todo,setTodo]=useState([]);
    const [search,setSearch]=useState('');


    return (<>
    <FormComponent todo={todo} search={search} setSearch={setSearch} setTodo={setTodo} />
    <TabComponent todo={todo} search={search} setSearch={setSearch} setTodo={setTodo} />
    
    </>)
    

}

export default Todo;