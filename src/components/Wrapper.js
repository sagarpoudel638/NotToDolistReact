import AddTask from "./AddTask";
import GoodBadList from "./GoodBadList";
import TitleContainer from "./TitleContainer";
import { uid } from "uid";
import React, { useState } from 'react';

// const { Toast } = bootstrap
function Wrapper() {
  
  let [taskList, settaskList] = useState([
    
  ]);
  const handleFormSubmit = ( taskValue, hourValue,typeValue) => {
    
    let tempTask = [...taskList];
    let id = uid();
    console.log(id)
    tempTask.push({id, taskValue, hourValue, typeValue});
    console.log("Updated Task List:", tempTask); // Check here
    settaskList(tempTask);
  }
  const deleteTask = (id) => {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    settaskList(filteredTasks); 
  };


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
