function AddTask() {
  return (
    <div className="container p-5">
      <form onSubmit="">
        <div className="row border border-white p-5">
          <div className="col-md-7">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="task"
                id="task"
                placeholder="Reading"
                
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
                placeholder="Reading"
                required
              />
              <label for="hours">Hours</label>
            </div>
          </div>
          <div className="col-md">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="good"
                value="good"
                autocomplete="off"
                checked
              />
              <label className="btn btn-outline-primary" for="good">
                Good
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="bad"
                value="bad"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" for="bad">
                Bad
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
