import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ListComponent({index,taskItem,deleteTask}) {
  // console.log(props);
  // console.log(props.hour)

const HandleDeleteButton = () => {
  
 let id = taskItem.id;
 console.log(id)
deleteTask(id);




}
  return (
    <tr>
      <td>{index}</td>
      <td>{taskItem.taskValue}</td>
      <td>{taskItem.hourValue}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
        onClick ={HandleDeleteButton()}
        >
          <FontAwesomeIcon icon="fa-solid fa-trash" />
        </button>
        <button
          type="button"
          className="btn btn-success"
        //   onclick="switchTask('${item.id}')"
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
        </button>
      </td>
    </tr>
  );
}
