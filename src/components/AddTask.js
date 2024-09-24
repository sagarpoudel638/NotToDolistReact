import goodImage from "../assets/good.png";
import badImage from "../assets/bad.png";
import { useState } from "react";

function AddTask({ handleFormSubmit }) {

  const [taskValue, settaskValue] = useState("");
  const [hourValue, sethourValue] = useState("");
  const [typeValue, settypeValue] = useState("good");
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "task") {
      settaskValue(value);
      // console.log(value)
      // console.log(taskValue)
    } else if (name === "hours") {
      sethourValue(value);
    } else if (name === "btnradio") {
      settypeValue(value);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("Submitted Values:", taskValue, hourValue, typeValue);
    handleFormSubmit("Test Task", "2", "good");
    
  };

  return (
    <div className="container p-5">
      <form onSubmit={submitForm}>
        <div className="row border border-white p-5">
          <div className="col-md-7">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="task"
                id="task"
                placeholder=""
                value={taskValue}
                onChange={handleChange}
                required
              />
              <label for="task">Task</label>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-floating mb-3">
              <input
                type="number"
                className="form-control"
                name="hours"
                id="hours"
                onChange={handleChange}
                placeholder=""
                value={hourValue}
                required
              />
              <label for="hours">Hours</label>
            </div>
          </div>
          <div className="col-md">
            <div
              className="btn-group"
              role="group"
              required
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="good"
                value="good"
                onChange={handleChange}
                checked = {typeValue === "good"}
              />
              <label className="btn btn-outline-primary" for="good">
                <img
                  src={goodImage}
                  style={{ width: "30px", height: "30px" }}
                />
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="bad"
                value="bad"
                onChange={handleChange}
                checked = {typeValue === "bad"}
                
               
              />
              <label className="btn btn-outline-primary" for="bad">
                <img src={badImage} style={{ width: "30px", height: "30px" }} />
              </label>
            </div>
          </div>
          <div className="col-md">
            <button type="submit" className="btn btn-primary">
              Add New Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
