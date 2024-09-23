import AddTask from "./AddTask";
import GoodBadList from "./GoodBadList";
import TitleContainer from "./TitleContainer";
import { uid } from "uid";
import React, { useState } from 'react';

// const { Toast } = bootstrap
function Wrapper() {
  let id = uid();
  let [taskList, settaskList] = useState([
    
  ]);
  const handleFormSubmit = ( taskValue, hourValue,typeValue) => {
    
    let tempTask = [...taskList];
    
    console.log(id)
    tempTask.push({id, taskValue, hourValue, typeValue});
    settaskList(tempTask);
  }
 const deleteTask= (id)=>{
  taskList = taskList.filter((task) => {
    return task.id !== id;
 })}

    return(
  <div style={{
    "height": "100vh",
    "background": "linear-gradient(180deg,rgba(168, 97, 143, 1) 0%,rgba(112, 130, 222, 1) 100%)"
  }}
>
    <TitleContainer/>
    <AddTask  handleFormSubmit={handleFormSubmit} />
    <GoodBadList goodBadlist ={taskList} deleteTask ={deleteTask} />
  </div>
    )
}

export default Wrapper;
