import AddTask from "./AddTask";
import GoodBadList from "./GoodBadList";
import TitleContainer from "./TitleContainer";
import { uid } from "uid";
import React, { useState } from 'react';
const { Toast } = bootstrap
function Wrapper() {

  let taskList = [];
const WEEKLYHOUR = 7*24;

// function showToast() {
//   const toastEl = document.getElementById('taskLimitToast');
//   const toast = new bootstrap.Toast(toastEl); 
//   toast.show(); 
// }
const addTask = (task,hour,type) => {
  const id = uid();
  const taskObj = {
    id,
    task,
    hour,
    type,
  };
  if (WEEKLYHOUR >= (parseInt(getTotalHours()))+hour){
    taskList.push(taskObj);
    displayList();
    myForm.reset();
    }
    else{
      //showToast();
      console.log("weekly Hour exceeded")
    }
};

    return(
  <div style={{
    "height": "100vh",
    "background": "linear-gradient(180deg,rgba(168, 97, 143, 1) 0%,rgba(112, 130, 222, 1) 100%)"
  }}
>
    <TitleContainer/>
    <AddTask />
    <GoodBadList/>
  </div>
    )
}

export default Wrapper;
