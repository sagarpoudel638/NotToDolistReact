import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ListComponent(props) {
//   console.log(props);
//   console.log(props.hour)
  return (
    <tr>
      <td>{props.taskItem.task}</td>
      <td></td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
        //   onclick="deleteTask('${item.id}')"
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
